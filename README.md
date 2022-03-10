# xrrabbit

xrrabbit 사진 데이터베이스 RESTful API

API 명세서
GET/ donor/club/:clubId - 클럽 별 목록 불러오기
요청변수(Param)

- clubId : 클럽 아이디로
  파트너클럽 = 1
  실버어너클럽 = 2
  화이트골드 = 3
  로즈골드 = 4
  골드 = 5
  플래티넘 = 6
  프레지던트 = 7
  크림슨 = 8
  일반기부자 = 9
  출력결과
  success/ Boolean / true : 요청성공 false : 요청 실패
  message/ String
  data / 요청 정보
  출력 예제

GET/ donor/:donorId/detail - 기부자 상세 내용 불러오기

GET/ donor/:donorId/article - 기부자 기사 내용 불러오기

GET/ donor/:searchKeyword/:clubId - 클럽 별 기부자 검색

GET/ donor/:searchKeyword - 기부자 전체 검색
