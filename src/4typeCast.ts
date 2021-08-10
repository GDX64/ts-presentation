import { MousePosition, Resizable } from "./3customTypes";

class ResizeHandler implements Resizable {
  onResizeStart(mousePosition: MousePosition): void {}
  onResize(mousePosition: MousePosition): number {
    return 0;
  }
  onResizeStop(mousePosition: MousePosition): void {}
  doNothing(): void {}
}




function getHandlerOrString(
  type: "resizeHandler" | "string"
): ResizeHandler | "resizeString" {
  return type === "resizeHandler" ? new ResizeHandler() : "resizeString";
}

function testResizable(arg: Resizable): void {
  // blablabla
}

function testHandler(arg: ResizeHandler): void {
  // blablabla
}




const inferedHandler = new ResizeHandler();
const handlerOrString = getHandlerOrString("resizeHandler");
const resizable: Resizable = new ResizeHandler();

testResizable(inferedHandler);
testResizable(handlerOrString);
testResizable(resizable);

testHandler(inferedHandler);
testHandler(handlerOrString);
testHandler(resizable);




const plainObj = {
  onResizeStart(mousePosition: MousePosition): void {},
  onResize(mousePosition: MousePosition): number {
    return 0;
  },
  onResizeStop(mousePosition: MousePosition): void {},
  doNothing(): void {},
  extraMethod(): void {},
};

testHandler(plainObj);
testResizable(plainObj);




const assertedObj = { ...plainObj } as Resizable;

testHandler(assertedObj);
testResizable(assertedObj);

plainObj.doNothing;
assertedObj.doNothing;
