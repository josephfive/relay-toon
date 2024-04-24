import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import Image from 'next/image';
import PaletteModal from './PaletteModal';
import { usePostToon } from '../hooks/usePostToon';
//모달밖에 어둡게 처리해야하고 모달 밖 클릭시 닫히게 해야하는데 지금 설정하면 모달 창 위치문제가 생김 포지션때문에
//그리고 브러쉬 종류 찾아보고 수정예정
export default function CanvasComponent(props: any, ref: any) {
  const [isDrawingMode, setIsDrawingMode] = useState(true);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(4);
  const [brushType, setBrushType] = useState('pencil');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstance = useRef<fabric.Canvas | null>(null);
  const [showPalette, setShowPalette] = useState(false);
  const { mutate: postToon } = usePostToon();
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 350,
      height: 407,
      backgroundColor: 'white',
      isDrawingMode: isDrawingMode,
    });
    canvasInstance.current = canvas;
    setupBrush();

    return () => {
      canvas.dispose();
    };
  }, [ref]);

  useEffect(() => {
    if (canvasInstance.current) {
      canvasInstance.current.isDrawingMode = isDrawingMode;
      setupBrush();
    }
  }, [isDrawingMode, color, lineWidth, brushType]);

  function setupBrush() {
    const canvas = canvasInstance.current;
    if (!canvas) return;

    let brush;
    switch (brushType) {
      case 'pencil':
        brush = new fabric.PencilBrush(canvas);
        break;
      case 'circle':
        brush = new fabric.CircleBrush();
        break;
      case 'eraser':
        brush = new fabric.PencilBrush(canvas);
        brush.width = lineWidth;
        brush.color = 'white';
        brush.globalCompositeOperation = 'destination-out';
        break;
      default:
        brush = new fabric.PencilBrush(canvas);
        break;
    }

    if (brushType !== 'eraser') {
      brush.color = color;
    }
    brush.width = lineWidth;
    canvas.freeDrawingBrush = brush;
  }
  const handleClear = () => {
    const canvas = canvasInstance.current;
    if (!canvas) return;
    canvas.clear();
  };
  const handleColorChange = (color: string) => {
    setColor(color);
    const canvas = canvasInstance.current;
    canvas!.freeDrawingBrush.color = color;
  };

  const handleSizeChange = (size: number) => {
    setLineWidth(size);
    const canvas = canvasInstance.current;
    canvas!.freeDrawingBrush.width = size;
  };

  const handleOpenPalette = () => {
    setShowPalette(true);
  };
  const handleClosePalette = () => {
    setShowPalette(false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={350}
        height={407}
        className=" rounded-lg"
      />
      <div className="ml-auto mr-auto mt-3 flex h-[45px] w-[350px] rounded-lg bg-[#EAEAEA]">
        <span className=" ml-[18.5px] flex items-center text-base font-extrabold">
          크기
        </span>
        <input
          type="range"
          min={1}
          max={30}
          value={lineWidth}
          onChange={(e) => handleSizeChange(Number(e.target.value))}
          className="ml-[10px] flex h-[12px] w-[243px] self-center"
        />
        <span className="ml-[10px] flex items-center text-base font-extrabold">
          {lineWidth}
        </span>
      </div>
      <div className=" mb-8 ml-auto mr-auto mt-[13px] flex h-16 w-[350px] flex-row items-center  rounded-lg bg-[#EAEAEA] px-[19px] py-[14px]">
        <div id="colorPalette" className="flex">
          <button
            className="h-9 w-9 rounded-md"
            onClick={() => setBrushType('pencil')}
          >
            <Image src="/svg/pencil.svg" alt="pencil" width={36} height={36} />
          </button>
          <button
            className="ml-[13px] h-9 w-9 rounded-md"
            onClick={() => setBrushType('brush')}
          >
            <Image src="/svg/brush.svg" alt="brush" width={36} height={36} />
          </button>
          <button
            className="ml-[13px] h-9 w-9 rounded-md"
            onClick={() => setBrushType('eraser')}
          >
            <Image src="/svg/eraser.svg" alt="eraser" width={36} height={36} />
          </button>
          <button
            className="ml-[13px] h-9 w-9 rounded-md"
            onClick={handleClear}
          >
            <Image src="/svg/reset.svg" alt="reset" width={36} height={36} />
          </button>
          <button
            className="ml-[100px]  flex h-[28px] w-[28px] self-center rounded-full border-[2px]  border-[#C4C4C4]"
            style={{ backgroundColor: `${color}` }}
            onClick={handleOpenPalette}
          ></button>
          <div className="relative w-[390px]">
            {showPalette && (
              <PaletteModal
                onClose={handleClosePalette}
                onColorSelect={handleColorChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
