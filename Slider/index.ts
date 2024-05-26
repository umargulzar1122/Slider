import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { createRoot, Root } from 'react-dom/client';
import Control from "./src/Control";
import { ControlProps } from "./types/ControlProps";
export class Slider implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    _container: HTMLDivElement;
    _context: ComponentFramework.Context<IInputs>;
    private rootControl: Root;
    _selectedValue: number = 0;
    _notifyOutputChanged: () => void;
    constructor() {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container;
        this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
    }


    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
        this._container.style.height = `${context.mode.allocatedHeight - 0}px`;
        this._container.style.width = `${context.mode.allocatedWidth - 0}px`;
        this.renderComponent();
    }
    private async renderComponent() {
        console.log(this._context);
        const props: ControlProps = {
            context: this._context,
            selectedValue: (value: number) => {
                this._selectedValue = value;
                this._notifyOutputChanged()
            }
        };
        console.log({ props });
        //this.destroy();
        this.rootControl = createRoot(this._container);
        this.rootControl.render(
            React.createElement(Control, props),
        );
    }
    public getOutputs(): IOutputs {
        return {
            inputValue: this._selectedValue
        };
    }


    public destroy(): void {
        this.rootControl.unmount();
    }
}
