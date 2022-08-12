/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import useIntersectionObserver from '@src/utils/useIntersectionObserver';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { setupInterceptorsTo } from '@src/utils/AxiosInterceptor';
import { Link } from 'react-router-dom';
import Notice from './Notice';
import { allClass, ClassProps, getClasses, saveMember } from '@store/member';
import axios from 'axios';
import { NoticeBoardStyle } from '../Board/NoticeBoard';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export interface NoticeProps {
  noticeId: number;
  writer: string;
  classTitle: string;
  title: string;
  content: string;
  regtime: string;
}

const NoticeBoard = () => {
  const dispatch = useAppDispatch();
  const memberStore = useAppSelector((state) => state.member);
  const InterceptedAxios = setupInterceptorsTo(axios.create());
  const [isTeacher, setIsTeacher] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState<ClassProps>(allClass);
  const [articles, setArticles] = useState<NoticeProps[]>([]);
  const [classes, setClasses] = useState<ClassProps[]>([allClass]);
  const [page, setPage] = useState(1);
  let totalPage = 0;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    // console.log(`감지결과 : ${isIntersecting}`);
    if (isIntersecting) {
      if (totalPage >= page) {
        setPage((prev) => prev + 1);
      }
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  useLayoutEffect(() => {
    dispatch(saveMember());
  }, []);

  useEffect(() => {
    dispatch(getClasses(memberStore.userId)).then(() => {
      setClasses(memberStore.classes);
    });
    if (memberStore.userId.toString().length !== 10) {
      setIsTeacher(true);
    } else {
      setIsTeacher(false);
    }
  }, [memberStore]);

  useEffect(() => {
    getNotice();
  }, [page]);

  const deleteNotice = (key: number) => {
    if (memberStore.isAdmin) {
      let finalCheck = confirm('정말로 삭제하시겠습니까?');
      if (finalCheck) {
        InterceptedAxios.delete('/notice/' + key.toString())
          .then(() => {
            setArticles(articles.filter((article) => article.noticeId !== key));
          })
          .catch(() => {});
      }
    }
  };

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArticles([]);
    setPage(1);

    // 검색 로직
    getNotice();
  };

  const getNotice = async () => {
    let word = '';
    if (keyword !== '') {
      word = '&titleSearch=' + keyword;
    }

    let searchQuery =
      '/notice/list?paged=true&sort.sorted=true&sort.unsorted=false&classId=' +
      selected.classId +
      '&userId=' +
      memberStore.userId +
      '&pageNumber=' +
      page +
      word;

    // console.log(searchQuery);

    const response = await InterceptedAxios.get(searchQuery);
    let list = response.data.content;

    totalPage = response.data.totalPages;
    if (totalPage >= page) {
      // checkNewNotice(list);
      setArticles(list);
    } else {
      console.log('마지막 페이지입니다!');
    }
  };

  const checkNewNotice = (value: NoticeProps[]) => {
    const newNotice: NoticeProps[] = [];
    value.forEach((element) => {
      const id = element.noticeId;
      let ExistenceStatus = articles.findIndex((i) => i.noticeId === id);
      if (ExistenceStatus === -1) {
        newNotice.push(element);
      }
    });
    setArticles([...articles, ...newNotice]);
  };

  const handleSelect = (e) => {
    let classId = parseInt(e.target.value);
    let current = allClass;
    classes.forEach((s) => {
      if (s.classId === classId) {
        current = s;
      }
    });
    setSelected(current);
  };

  return (
    <div css={NoticeBoardStyle}>
      <div className="upperModalArea">
        <div className="pageTitle">공지사항(관리자)</div>
        <form onSubmit={search} className="search-div">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">수업명</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-select-small"
              label="수업명"
              onChange={handleSelect}
              MenuProps={MenuProps}
            >
              {classes.map((s) => (
                <MenuItem key={s.classId} value={s.classId}>
                  {s.classTitle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="search"
            id="outlined-basic"
            variant="outlined"
            value={keyword || ''}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {isTeacher ? (
            <>
              <button type="submit" className="button-sm blue">
                검색
              </button>
              <button type="button" className="button-sm pink">
                <Link to="/admin/noticePost">글 쓰기</Link>
              </button>
            </>
          ) : (
            <button type="submit" className="button-sm blue">
              검색
            </button>
          )}
        </form>
      </div>
      <div className="tableArea">
        <div className="row titleRow">
          <div className="col noticeId">번호</div>
          <div className="col classTitle">수업명</div>
          <div className="col noticeTitle">제목</div>
          <div className="col writer">작성자</div>
          <div className="col regtime">작성일</div>
        </div>

        <div className="articleArea">
          {articles.map((article) => {
            return (
              <Notice
                key={article.noticeId}
                article={article}
                deleteNotice={() => deleteNotice(article.noticeId)}
              />
            );
          })}
          <div ref={setTarget} className="Loading">
            {/* {isLoading && 'Loading...'} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
