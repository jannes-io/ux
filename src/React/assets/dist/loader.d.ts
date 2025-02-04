import type { ComponentClass, FunctionComponent } from 'react';
import { type ComponentCollection } from './components.js';
type Component = string | FunctionComponent<object> | ComponentClass<object, any>;
declare global {
    function resolveReactComponent(name: string): Component;
    interface Window {
        resolveReactComponent(name: string): Component;
    }
}
export declare function registerReactControllerComponents(reactComponents?: ComponentCollection): void;
export {};
