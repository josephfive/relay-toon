export {
  getEnv,
  getFabricDocument,
  getFabricWindow,
  setEnv,
} from './src/env/index.mjs';
export { cache } from './src/cache.mjs';
export { iMatrix, VERSION as version } from './src/constants.mjs';
export { config } from './src/config.mjs';
export { classRegistry } from './src/ClassRegistry.mjs';
export { runningAnimations } from './src/util/animation/AnimationRegistry.mjs';
export { Observable } from './src/Observable.mjs';
export { StaticCanvas } from './src/canvas/StaticCanvas.mjs';
export { Canvas } from './src/canvas/Canvas.mjs';
export { CanvasDOMManager } from './src/canvas/DOMManagers/CanvasDOMManager.mjs';
export { StaticCanvasDOMManager } from './src/canvas/DOMManagers/StaticCanvasDOMManager.mjs';
export { Point } from './src/Point.mjs';
export { Intersection } from './src/Intersection.mjs';
export { Color } from './src/color/Color.mjs';
export { Gradient } from './src/gradient/Gradient.mjs';
export { Pattern } from './src/Pattern/Pattern.mjs';
export { Shadow } from './src/Shadow.mjs';
export { BaseBrush } from './src/brushes/BaseBrush.mjs';
export { PencilBrush } from './src/brushes/PencilBrush.mjs';
export { CircleBrush } from './src/brushes/CircleBrush.mjs';
export { SprayBrush } from './src/brushes/SprayBrush.mjs';
export { PatternBrush } from './src/brushes/PatternBrush.mjs';
export {
  FabricObject,
  FabricObject as Object,
} from './src/shapes/Object/FabricObject.mjs';
export { Line } from './src/shapes/Line.mjs';
export { Circle } from './src/shapes/Circle.mjs';
export { Triangle } from './src/shapes/Triangle.mjs';
export { Ellipse } from './src/shapes/Ellipse.mjs';
export { Rect } from './src/shapes/Rect.mjs';
export { Path } from './src/shapes/Path.mjs';
export { Polyline } from './src/shapes/Polyline.mjs';
export { Polygon } from './src/shapes/Polygon.mjs';
export { FabricText, FabricText as Text } from './src/shapes/Text/Text.mjs';
export { IText } from './src/shapes/IText/IText.mjs';
export { Textbox } from './src/shapes/Textbox.mjs';
export { Group } from './src/shapes/Group.mjs';
export { LayoutManager } from './src/LayoutManager/LayoutManager.mjs';
export { ClipPathLayout } from './src/LayoutManager/LayoutStrategies/ClipPathLayout.mjs';
export { FitContentLayout } from './src/LayoutManager/LayoutStrategies/FitContentLayout.mjs';
export { FixedLayout } from './src/LayoutManager/LayoutStrategies/FixedLayout.mjs';
export { LayoutStrategy } from './src/LayoutManager/LayoutStrategies/LayoutStrategy.mjs';
export { ActiveSelection } from './src/shapes/ActiveSelection.mjs';
export { FabricImage, FabricImage as Image } from './src/shapes/Image.mjs';
export { createCollectionMixin } from './src/Collection.mjs';
import * as index from './src/util/index.mjs';
export { index as util };
export { loadSVGFromString } from './src/parser/loadSVGFromString.mjs';
export { loadSVGFromURL } from './src/parser/loadSVGFromURL.mjs';
export { parseSVGDocument } from './src/parser/parseSVGDocument.mjs';
export { parseAttributes } from './src/parser/parseAttributes.mjs';
export { parseStyleAttribute } from './src/parser/parseStyleAttribute.mjs';
export { parsePointsAttribute } from './src/parser/parsePointsAttribute.mjs';
export { parseTransformAttribute } from './src/parser/parseTransformAttribute.mjs';
export { getCSSRules } from './src/parser/getCSSRules.mjs';
export { parseFontDeclaration } from './src/parser/parseFontDeclaration.mjs';
export { Control } from './src/controls/Control.mjs';
import * as index$1 from './src/controls/index.mjs';
export { index$1 as controlsUtils };
import * as filters from './src/filters/filters.mjs';
export { filters };
export {
  getFilterBackend,
  initFilterBackend,
  setFilterBackend,
} from './src/filters/FilterBackend.mjs';
export { Canvas2dFilterBackend } from './src/filters/Canvas2dFilterBackend.mjs';
export { WebGLFilterBackend } from './src/filters/WebGLFilterBackend.mjs';
export {
  isPutImageFaster,
  isWebGLPipelineState,
} from './src/filters/utils.mjs';
//# sourceMappingURL=fabric.mjs.map
