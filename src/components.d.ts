/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface YoobicGrid {
        "data": object[];
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLYoobicGridElement extends Components.YoobicGrid, HTMLStencilElement {
    }
    var HTMLYoobicGridElement: {
        prototype: HTMLYoobicGridElement;
        new (): HTMLYoobicGridElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "yoobic-grid": HTMLYoobicGridElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface YoobicGrid {
        "data"?: object[];
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "yoobic-grid": YoobicGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "yoobic-grid": LocalJSX.YoobicGrid & JSXBase.HTMLAttributes<HTMLYoobicGridElement>;
        }
    }
}
