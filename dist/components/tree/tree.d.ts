import ShoelaceElement from '../../internal/shoelace-element';
import type SlTreeItem from '../tree-item/tree-item';
import type { CSSResultGroup } from 'lit';
export default class SlTree extends ShoelaceElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    expandedIconSlot: HTMLSlotElement;
    collapsedIconSlot: HTMLSlotElement;
    selection: 'single' | 'multiple' | 'leaf';
    private lastFocusedItem;
    private readonly localize;
    private mutationObserver;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private getExpandButtonIcon;
    private initTreeItem;
    handleTreeChanged: (mutations: MutationRecord[]) => void;
    handleSelectionChange(): void;
    syncTreeItems(selectedItem: SlTreeItem): void;
    selectItem(selectedItem: SlTreeItem): void;
    get selectedItems(): SlTreeItem[];
    getAllTreeItems(): SlTreeItem[];
    getFocusableItems(): SlTreeItem[];
    focusItem(item?: SlTreeItem | null): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleClick(event: Event): void;
    handleFocusOut: (event: FocusEvent) => void;
    handleFocusIn: (event: FocusEvent) => void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tree': SlTree;
    }
}
