import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InterceptedAxios from '@utils/iAxios';
import './Emoji.css';

const Emoji = (props) => {
  const { display, toggleEmoji, header, emoji, whoami, id } = props;

  const emotions = [];

  useEffect(() => {
    if (display) {
      if (whoami === 'teacher') {
        //선생님이면 모든 리액션
        alert('teacher');
      } else {
        //학생이면 보유리액션
        alert('student');
        InterceptedAxios.get(`/items/reaction/${id}`)
          .then(function (response) {
            alert(id);
            console.log('???', response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }, [display]);

  return (
    <div className={display ? 'openModal modal' : 'modal'}>
      <div className="temp">
        <h1>{id}</h1>
      </div>
    </div>
  );
};

export default Emoji;
