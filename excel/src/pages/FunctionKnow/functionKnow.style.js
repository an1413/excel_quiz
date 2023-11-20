// import styled from 'styled-components';

// export const CardWrapper = styled.div`
//   margin: 2rem auto;
//   width: 1200px;
//   display:flex;
//   flex-wrap: wrap;
// `;

// export const CardTitle = styled.h1`
//   display:block;
// `

// export const ListGroup = styled.div`
//   /* display: flex; */
//   margin-bottom: 1rem;
// `

// export const ListGroupItem = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 100px;
//   padding: 1rem;
//   border-radius: 1rem;
//   background-color: #fff;
//   &:hover {
//     cursor: pointer;
//     color: #ddd;
//     background-color: green;
//     scale: 1.05;
//   }
// `

import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin: 2rem auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListGroupItem = styled.div`
  width: 200px;
  height: 100px;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: green;
    transform: scale(1.05);
  }
`;
