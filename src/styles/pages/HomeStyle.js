import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
  background-image: url("/images/bg assets.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    z-index: -1;
  }
  min-height: 100vh;
  section {
    z-index: 1;
  }
  .section {
    &_1 {
      padding: 85px 92px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: flex-start;
      @media (max-width: 768px) {
        padding: 55px 52px 0;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
        padding: 45px 20px 0;
      }
      &__left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &_box {
          background-color: var(--dark-m);
          padding: 25.41px;
          border-radius: 16px;
          width: min(100%, 376.01px);
          img {
            width: 100%;
            border-radius: 16px;
          }
          &__details {
            padding-top: 37.11px;
            display: flex;
            align-items: center;
            gap: 15.24px;
            img {
              width: 74.14px;
              height: 74.14px;
            }
            &_data {
              display: grid;
              gap: 12.7px;
              h4 {
                font: var(--h4);
                color: var(--gray);
                margin: 0;
              }
              p {
                color: var(--gray-deep);
                margin: 0;
              }
            }
          }
        }
      }
      &__right {
        display: grid;
        gap: 40px;
        max-width: 615px;
        h1 {
          font: var(--h1);
          color: var(--gray);
          margin: 0;
        }
        p {
          color: var(--gray-deep);
          font: var(--p-l);
        }
      }
    }
    &_2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      padding: 49.3px 192px 160px;
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
      }
      &__element {
        display: flex;
        gap: 12px;
        &_details {
          h2 {
            font: var(--h2);
            color: var(--gray);
          }
          p {
            color: var(--gray-deep);
            font: var(--p-l);
          }
        }
      }
    }
    &_3 {
      background-color: var(--dark-m);
      padding: 44px 92px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: space-around;
      &__element {
        max-width: 273px;
        display: grid;
        grid-template-rows: 2fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 52px;
        margin: 0 auto;
        img {
          height: 0 auto;
          width: 160px;
          margin: auto;
        }
        h2 {
          font: var(--h2);
          color: var(--gray);
          text-align: center;
          margin-bottom: auto;
        }
        &:nth-child(2) {
          img {
            width: 172px;
          }
        }
        &:nth-child(3) {
          img {
            width: 216px;
          }
        }
      }
    }
    &_4 {
      padding: 120px 92px 112px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 548px) {
        grid-template-columns: 1fr;
      }
      &__element {
        &:nth-child(1) {
          h2 {
            font: var(--h2);
            color: var(--gray);
            margin-bottom: 24px;
          }
          p {
            font: 600 var(--p-l);
            max-width: 548px;
            color: var(--gray-deep);
            margin-bottom: 60px;
          }
        }
        &:nth-child(2) {
          display: flex;
          img {
            margin: auto;
          }
        }
      }
    }
    &_5 {
      padding: 0 92px 92px;
      h2 {
        font: var(--h2);
        color: var(--gray);
      }
      p {
        margin: 0;
        color: var(--gray-deep);
      }
      &__element {
        &.one {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .section_5__element_options {
            text-align: center;
            overflow-x: auto;
            padding: 40px 20px;
            h3 {
              font: var(--h3);
              color: var(--gray);
              border-bottom: 3px solid transparent;
              margin: 0 auto;
              width: max-content;
              cursor: pointer;
              &.active {
                border-bottom: 3px solid var(--yellow);
              }
            }
          }
        }
        &.two__storebuilder {
          padding: 24px 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-around;
        }
        &_content {
          max-width: 219px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          img {
            margin-bottom: 54px;
          }
          h3 {
            font: var(--h3);
            color: var(--gray);
            margin-bottom: 12px;
          }
          p {
            font: var(--p-m);
            color: var(--gray-deep);
          }
          &:first-child {
            img {
              width: 90px;
              height: 90px;
            }
          }
          &:nth-child(2) {
            img {
              width: 97px;
              height: 92px;
            }
          }
          &:nth-child(3) {
            img {
              width: 102.7px;
              height: 96px;
            }
          }
          &:nth-child(4) {
            img {
              width: 108.31px;
              height: 92px;
            }
          }
        }
      }
    }
    &_6 {
      background-color: var(--dark-m);
      padding: 60px 92px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
      &__element {
        &:nth-child(1) {
          width: min(100%, 736px);
        }
        h2 {
          font: var(--h2);
          color: var(--gray);
        }
        p {
          margin: 0;
          color: var(--gray-deep);
        }
      }
    }
    &_7 {
      display: grid;
      grid-template-columns: 2fr 8fr 2fr;
      padding: 120px 92px 117px;
      gap: 30px;
      &__element {
        &:nth-child(3) {
          display: flex;
          margin-top: auto;
          margin-bottom: 0;
        }
      }
    }
  }
  .am_diff {
    padding: 120px 92px 70px;
    h2 {
      font: var(--h2);
      color: var(--gray);
      margin-bottom: 24px;
    }
    p {
      font: var(--p-l);
      color: var(--gray-deep);
      margin-bottom: 83px;
      max-width: 983px;
    }
    &__element {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      &_content {
        display: grid;
        grid-template-columns: 2fr 10fr;
        gap: 23px;
        h3 {
          font: var(--h3);
          color: var(--gray);
          margin-bottom: 24px;
        }
        p {
          font: var(--p-m);
          color: var(--gray-deep);
          max-width: 479px;
        }
      }
    }
    &__link {
      a {
        color: var(--yellow);
        text-decoration: none;
      }
    }
  }
`;
