export type MousePosition = {
  pageX: number;
  pageY: number;
};

export type Point = {
  x: number;
  y: number;
};

export interface Resizable {
  onResizeStart(mousePosition: MousePosition): void;
  onResize(mousePosition: MousePosition): number;
  onResizeStop(mousePosition: MousePosition): void;
}

class ResizeHandlerIncomplete implements Resizable {
  onResizeStart(mousePosition: MousePosition): void {
    // Handle resize start
  }

  onResize(mousePosition: MousePosition): number {
    // Handle resize
    return 0;
  }
}

class ResizeHandlerIncorrect implements Resizable {
  onResizeStart(point: Point): void {
    // Handle resize start
  }

  onResize(mousePosition: MousePosition): void {
    // Handle resize
  }

  onResizeStop(mousePosition: MousePosition): void {
    // Handle resize stop
  }
}

const incomplete = new ResizeHandlerIncomplete();
const incorrect = new ResizeHandlerIncorrect();
const resizableIncomplete: Resizable = new ResizeHandlerIncomplete();
const resizableIncorrect: Resizable = new ResizeHandlerIncorrect();
