/* 구글 시트 게시판 연결 설정
   구글 시트 '웹에 게시' 후 나온 CSV 주소를 아래 따옴표 안에 붙여넣으세요.
   비워 두면 data/posts.js의 글을 보여줍니다. */
var SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSN3tPJYkjJmolKiIJ0QgzvU3hWTUXY4gxNYOlO01p6a2BQ8Qz080UehcHO-kxbRExiZdEU67CnvGVB/pub?output=csv";

/* 상품 프로모션(식자재 공급 > 상품 보기) 구글 시트 연결 설정
   '상품프로모션' 탭을 웹에 게시(CSV)한 주소를 붙여넣으세요. 비우면 images 폴더의 사진을 보여줍니다. */
var PROMO_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSN3tPJYkjJmolKiIJ0QgzvU3hWTUXY4gxNYOlO01p6a2BQ8Qz080UehcHO-kxbRExiZdEU67CnvGVB/pub?gid=2058873917&single=true&output=csv";

/* 자료실(카탈로그·서류 양식·월간 자료) 구글 시트 연결 설정
   '자료실' 탭을 웹에 게시(CSV)한 주소를 붙여넣으세요. 비우면 '등록된 자료가 없습니다'로 표시됩니다. */
var RESOURCE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSN3tPJYkjJmolKiIJ0QgzvU3hWTUXY4gxNYOlO01p6a2BQ8Qz080UehcHO-kxbRExiZdEU67CnvGVB/pub?gid=971008554&single=true&output=csv";