package com.pingpong.backend.api.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

/**
 * jwt 패키지를 생성하고, 토큰의 생성과 토큰의 유효성 검증등을 담당할 Token Provider
 */

//InitializingBean implements해서 afterPropertiesSet을 Override한 이유는
//Bean이 생성이 되고 주입을 받은 후에(TokenProvider()생성자)
//afterPropertiesSet에서 secret값을 BaseDecode한 다음에 key변수에 할당하기 위함
@Component
public class TokenProvider1 implements InitializingBean {
    private final Logger logger = LoggerFactory.getLogger(TokenProvider1.class);

    private static final String AUTHORITIES_KEY = "auth";

    private final String secret;
    private final long tokenValidityInMilliseconds;

    private Key key;


    public TokenProvider1(
            @Value("${jwt.secret}") String secret,          //yml의 값들
            @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {   //하루
        this.secret = secret;
        this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
    }

    //secret값을 Base64로 Decode해서 key 변수에 할당
    @Override
    public void afterPropertiesSet() {
        // base64로 변환된 키를 byte[]로 변환
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        // hmacShaKeyfor를 이용해 Key객체로 변환
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    //Authentication 객체의 권한정보를 이용해서 토큰을 생성
    public String createToken(Authentication authentication) {
        //authenticaion 객체를 받아서 권한 설정을 하고, application.yml 에서 설정했던 토큰 만료시간을 설정하고 토큰을 생성
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();
        Date validity = new Date(now + this.tokenValidityInMilliseconds);   //yml에 설정한 토큰 만료시간 설정

        //JWT토큰 생성해서 리턴
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(key, SignatureAlgorithm.HS512)
                .setExpiration(validity)
                .compact();
    }

    //토큰에 담겨있는 정보를 이용해 Authentication 객체를 리턴
    public Authentication getAuthentication(String token) {
        //token으로 클레임을 만들고, 클레임에서 권한정보를 받아서 유저 객체를 만들어서 최종적으로 Authenticaion 객체를 리턴합니다.
        //Claims : JWT 의 속성정보, java 에서 Claims 는 Json map 형식의 인터페이스임
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    //토큰 유효성 검사
    public boolean validateToken(String token) {
        //토큰 파싱하고 발생하는 예외 캐치 -> 문제 있으면 false, 정상이면 true 리턴
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            logger.info("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            logger.info("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            logger.info("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            logger.info("JWT 토큰이 잘못되었습니다.");
        }
        return false;
    }
}
