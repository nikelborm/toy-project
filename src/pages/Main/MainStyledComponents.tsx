import styled, { css } from 'styled-components';

import { ConnectIcon, DownloadIcon, UploadIcon } from '@assets';

const defaultTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;

export const WindowWrapper = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;

  background: linear-gradient(106.98deg, #555555 2.79%, #2F2E2E 100%);
  border-radius: 6px;
  overflow: hidden;

  ${defaultTextStyle}
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  height: 40px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #383838;
`;

export const ConnectionStatusWrapper = styled.div`
  position: absolute;
  width: 189px;
  height: 18px;
  left: 18px;
  top: calc(50% - 18px/2);
`;

export const ConnectionStatusCircle = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 0px;
  top: 0px;
  border-radius: 25px;
  background: #FF0000;
`;

export const ConnectionStatusText = styled.div`
  position: absolute;
  width: 180px;
  height: 14px;
  left: 29px;
  top: 2px;

  color: #FFFFFF;
`;

export const blueButtonStyles = css`
  position: absolute;
  height: 20px;

  background: #5E7ADC;
  outline: none;
  border: none;
  border-radius: 5px;

  ${defaultTextStyle}
  color: #FFFFFF;
  padding: 0 0 0 20px;
`;

export const blueButtonIconStyles = css`
  position: absolute;
  width: 13px;
  height: 13px;
  left: 7px;
  top: 3px;
`;

export const ConnectButtonWrapper = styled.button`
  ${blueButtonStyles}
  width: 122px;
  left: 248px;
  top: calc(50% - 20px/2);
`;

export const ConnectButtonIcon = styled(ConnectIcon)`
  ${blueButtonIconStyles}
`;

export const WindowCloseButtonsWrapper = styled.div`
  position: absolute;
  width: 68px;
  height: 16px;
  right: 18px;
  top: calc(50% - 16px/2);

  display: flex;
  justify-content: space-between;
`;

export const CircleButton = styled.button<{ color:string; }>`
  width: 16px;
  height: 16px;

  background: ${(props) => props.color};
  flex: 0 1 auto;
  border: none;
  border-radius: 20px;
`;

export const WindowContentWrapper = styled.div`
  position: absolute;
  width: 1210px;
  height: 610px;
  left: 35px;
  top: 75px;
`;

export const AudioLibraryWrapper = styled.div`
  position: absolute;
  width: 335px;
  height: 449px;
  left: 0px;
  top: 0px;

  background: linear-gradient(150.9deg, #343434 0%, #373737 100%);
  border-radius: 10px;
`;

export const AudioRecorderWrapper = styled.div`
  position: absolute;
  width: 335px;
  height: 141px;
  left: 0px;
  top: 469px;

  background: #373737;
  border-radius: 10px;
`;

export const SheetNavWrapper = styled.div`
  position: absolute;
  width: 550px;
  height: 40px;
  left: 355px;
  top: 0px;

  background: #5D5D5D;
  border-radius: 10px;
`;

export const SheetNavButton = styled.div`
  min-width: 40px;
  height: 40px;

  background: #B8B8B8;
  border-radius: 10px;
  border: none;
  padding: 0px;

  display: grid;
  place-items: center;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
`;

export const SheetNavLeftButton = styled(SheetNavButton)`
  position: absolute;
  left: 0;
`;

export const SheetNavRightButton = styled(SheetNavButton)`
  position: absolute;
  right: 0;
`;

export const SheetNumberListWrapper = styled.div`
  position: absolute;
  left: 51px;
  right: 51px;

  & *:first-child {
    margin: 0px;
  }

  & *:not(:first-child) {
    margin-left: 11px;
  }

  overflow-x: scroll;
  overflow-y: hidden;

  scrollbar-width: none;
  display: flex;

  & ::-webkit-scrollbar {
    display: none;
  }
`;

export const AudioCardsSheetWrapper = styled.div`
  position: absolute;
  width: 550px;
  height: 550px;
  left: 355px;
  top: 60px;

  display: grid;
  grid-gap: 3px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const AudioCardWrapper = styled.div`
  background: #5E5E5E;
  border-radius: 10px;
`;

export const DeviceManagementBarWrapper = styled.div`
  position: absolute;
  width: 285px;
  height: 610px;
  left: 925px;
  top: 0px;

  background: linear-gradient(203.4deg, #353535 17.64%, #383838 82.37%);
  border-radius: 10px;
`;

export const ReadFromDeviceButtonWrapper = styled.button`
  ${blueButtonStyles}
  width: 179px;
  left: 41px;
  top: 341px;
`;

export const WriteToDeviceButtonWrapper = styled.button`
  ${blueButtonStyles}
  width: 179px;
  left: 41px;
  top: 364px;
`;

export const ReadFromDeviceButtonIcon = styled(UploadIcon)`
  ${blueButtonIconStyles}
`;

export const WriteToDeviceButtonIcon = styled(DownloadIcon)`
  ${blueButtonIconStyles}
`;
