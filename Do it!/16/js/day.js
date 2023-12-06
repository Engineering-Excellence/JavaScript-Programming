/* 날짜 계산하는 프로그램 만들기 */
'use strict'

const now = new Date()  // 오늘 날짜를 객체로 지정
const firstDay = new Date('2022-08-01') // 시작 날짜를 객체로 지정

const toNow = now.getTime()  // 현재 시각을 밀리초로 반환
const toFirst = firstDay.getTime()  // 시작 시각을 밀리초로 반환
let passedTime = toNow - toFirst  // 첫날부터 오늘까지 지난 시간(밀리초)

passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24))  // 일 단위로 반올림

console.log(`개발 입문한 지 ${passedTime}일`)