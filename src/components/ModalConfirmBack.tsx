interface ModalConfirmBack {
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>;
  isBack: boolean;
  setStart?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalConfirmBack({
  setIsBack,
  setStart,
}: ModalConfirmBack) {
  const onQuitClick = () => {
    setIsBack(false);
    if (setStart) {
      setStart(true);
    }
  };

  const onBackgroundClick = () => {
    setIsBack(false);

    if (setStart) {
      setStart(true);
    }
  };
  const onBackCLick = () => {
    history.pushState(null, '', location.href);
    history.go(-3);
    setIsBack(false);
  };

  return (
    <>
      <div
        onClick={onBackgroundClick}
        className="margin-auto fixed top-0 z-40 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      ></div>
      <div className="*:custom-pretendard-font absolute left-[35.5%] top-1/3 z-50 flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
        <div className="flex h-[129px] w-[300px] flex-col items-center justify-center gap-[8px] font-medium">
          <span className="text-[20px] ">그리는 중이에요!</span>
          <span className="flex flex-col items-center text-[16px] text-[#9E9E9E]">
            <span>페이지를 벗어나면</span>
            <span>그림은 저장되지 않습니다</span>
          </span>
        </div>
        <div className="border-t-F2F2F2 flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
          <div
            onClick={onQuitClick}
            className="flex w-[150px] cursor-pointer items-center justify-center"
          >
            <span>취소</span>
          </div>
          <div
            onClick={onBackCLick}
            className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]"
          >
            <span>뒤로가기</span>
          </div>
        </div>
      </div>
    </>
  );
}
