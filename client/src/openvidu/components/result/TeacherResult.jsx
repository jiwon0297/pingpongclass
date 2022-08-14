import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InterceptedAxios from '@src/utils/iAxios';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const TeacherResult = ({
  teacherName,
  classTitle,
  whoami,
  myData,
  othersData,
  finTime,
  classId,
}) => {
  console.log(myData);
  console.log(othersData);
  const [totalStudentNum, setTotalStudentNum] = useState(0);
  const [attStudentNum, setAttStudentNum] = useState(0);
  const [totalSticker, setTotalSticker] = useState(0);

  const applyToDB = async () => {
    try {
      const promises = othersData.map(async (elem) => {
        InterceptedAxios.patch(
          `/students/points/${elem.point}?studentId=${elem.uid}`,
        );
      });
      await Promise.all(promises);
      console.log('DB에 포인트들 저장 완료~');
    } catch (e) {
      alert(
        '오류가 발생하여 정상적으로 저장되지 않았습니다. 행정실에 문의하세요.',
      );
    }
  };

  useEffect(() => {
    setTotalStudentNum(othersData.length); // 우선 임시로
    setAttStudentNum(othersData.length); // 참여자 수
    setTotalSticker(othersData.reduce((acc, cur) => (acc += cur.point), 0)); // 총 부여 스티커 계산식

    console.log(totalSticker);
  }, [whoami, myData, othersData, totalSticker]);

  // 스크롤 처리 해야함
  // const data = [
  //   {
  //     name: '접속자',
  //     value: 3,
  //   },
  //   {
  //     name: '미접속자',
  //     value: 5,
  //   },
  // ];

  const data = [
    { name: '참여 학생', value: 5 },
    { name: '미참여 학생', value: 3 },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    value,
    outerRadius,
    fill,
    midAngle,
    index,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle">
          출석 통계
        </text>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${name} : ${value}명`}</text>
      </g>
    );
  };

  const COLORS = [
    '#febe00',
    '#577fdc',
    '#fe5500',
    '#1c8044',
    '#742a91',
    '#31aaa6',
  ];

  return (
    <div css={TotalContainer}>
      <h2>고생하셨습니다 {teacherName} 선생님!</h2>
      <br />
      <h3 style={{ margin: '0' }}>수업 통계</h3>
      <div css={ClassStatistic}>
        <div className="teacherResult">
          <div className="teacher index">
            <div className="t-classname">수업 이름</div>
            <div className="t-nickname">선생님 이름</div>
            <div className="t-attendence-time">수업 개설 시간</div>
            <div className="t-fin-time">수업 종료 시간</div>
            <div className="t-point">총 부여 상점</div>
          </div>
          <div className="teacher">
            <div className="t-classname">{classTitle}</div>
            <div className="t-nickname">{teacherName}</div>
            <div className="t-attendence-time">{myData.attendenceTime}</div>
            <div className="t-fin-time">{finTime}</div>
            <div className="t-point">{totalSticker}</div>
          </div>
        </div>
        <div>
          <PieChart width={400} height={400}>
            <Pie
              label={renderCustomizedLabel}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <h3>학생 통계</h3>
      <div css={TotalResult}>
        <div className="studentResult">
          <div className="person index">
            <div className="s-nickname">닉네임</div>
            <div className="s-attendence-time">최종 출석 시간</div>
            <div className="s-point">상점</div>
          </div>
          {othersData.map((other, i) => (
            <div key={i} className="person">
              <div className="s-nickname">{other.nickname}</div>
              <div className="s-attendence-time">{other.attendenceTime}</div>
              <div className="s-point">{other.point}</div>
            </div>
          ))}
        </div>
        <div>
          <BarChart
            width={500}
            height={300}
            data={othersData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nickname" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="point" fill="#8884d8" label={{ position: 'top' }}>
              {othersData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div css={OtherThings}>
        <Link to={`/teacher`}>
          <div className="btn-items">
            <button onClick={applyToDB}>
              로그 저장 후 대시보드로 돌아가기
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

const TotalContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClassStatistic = css`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .teacherResult {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }

  h3 {
    text-align: center;
  }

  .teacher {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      margin: 1rem;
      height: 1rem;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    & > .t-classname {
      display: flex;
      width: 100px;
      justify-content: center;
      align-items: center;
    }

    & > .t-nickname {
      display: flex;
      width: 100px;
      justify-content: center;
      align-items: center;
    }

    & > .t-attendence-time,
    .t-fin-time {
      display: flex;
      width: 100px;
      justify-content: center;
      align-items: center;
    }

    & > .t-point,
    .t-student-number,
    .t-att-student-number {
      display: flex;
      width: 100px;
      justify-content: center;
      align-items: center;
    }
  }
`;

const TotalResult = css`
  display: flex;
  flex-direction: row;

  .studentResult {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }

  h3 {
    text-align: center;
  }

  .person {
    display: flex;
    flex-direction: row;

    & > div {
      display: flex;
      margin: 1rem;
      height: 1rem;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    & > .s-nickname {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;
    }

    & > .s-attendence-time {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;
    }

    & > .s-point {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;
    }
  }
`;

const OtherThings = css``;

export default TeacherResult;
