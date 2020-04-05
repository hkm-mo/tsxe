import * as CSS from 'csstype';


type Booleanish = boolean | 'true' | 'false';
type NativeWheelEvent = WheelEvent;


type EventHandler<K extends keyof HTMLElementEventMap> = (this: HTMLElement, ev: HTMLElementEventMap[K]) => any;

declare global {
    namespace JSX {
        type Element = HTMLElement;
    
        type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = E;
    
        //HTMLElementTagNameMap
        interface IntrinsicElements {
            "a": DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            "abbr": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "address": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "applet": DetailedHTMLProps<HTMLAttributes<HTMLAppletElement>, HTMLAppletElement>;
            "area": DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            "article": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "aside": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "audio": DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            "b": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "base": DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            "basefont": DetailedHTMLProps<HTMLAttributes<HTMLBaseFontElement>, HTMLBaseFontElement>;
            "bdi": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "bdo": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "blockquote": DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            "body": DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            "br": DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            "button": DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            "canvas": DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            "caption": DetailedHTMLProps<HTMLAttributes<HTMLTableCaptionElement>, HTMLTableCaptionElement>;
            "cite": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "code": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "col": DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            "colgroup": DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            "data": DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            "datalist": DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            "dd": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "del": DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            "details": DetailedHTMLProps<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            "dfn": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "dialog": DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            "dir": DetailedHTMLProps<HTMLAttributes<HTMLDirectoryElement>, HTMLDirectoryElement>;
            "div": DetailedHTMLProps<AnchorHTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            "dl": DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            "dt": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "em": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "embed": DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            "fieldset": DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            "figcaption": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "figure": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "font": DetailedHTMLProps<FontHTMLAttributes<HTMLFontElement>, HTMLFontElement>;
            "footer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "form": DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            "h1": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "h2": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "h3": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "h4": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "h5": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "h6": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            "head": DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            "header": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "hgroup": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "hr": DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            "html": DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            "i": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "iframe": DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            "img": DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            "input": DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            "ins": DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            "kbd": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "label": DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            "legend": DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            "li": DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            "link": DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            "main": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "map": DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            "mark": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "menu": DetailedHTMLProps<MenuHTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
            "meta": DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            "meter": DetailedHTMLProps<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            "nav": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "noscript": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "object": DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            "ol": DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            "optgroup": DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            "option": DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            "output": DetailedHTMLProps<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            "p": DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            "param": DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            "picture": DetailedHTMLProps<HTMLAttributes<HTMLPictureElement>, HTMLPictureElement>;
            "pre": DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            "progress": DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            "q": DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            "rp": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "rt": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "ruby": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "s": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "samp": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "script": DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            "section": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "select": DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            "small": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "source": DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            "span": DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            "strong": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "style": DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            "sub": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "summary": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "sup": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "table": DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            "tbody": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            "td": DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            "template": DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            "textarea": DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            "tfoot": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            "th": DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            "thead": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            "time": DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            "title": DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            "tr": DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            "track": DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            "u": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "ul": DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            "video": DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            "wbr": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    
        interface DOMAttributes<T> {
            // Clipboard Events
            onCopy?: EventHandler<"copy">;
            onCopyCapture?: EventHandler<"copy">;
            onCut?: EventHandler<"cut">;
            onCutCapture?: EventHandler<"cut">;
            onPaste?: EventHandler<"paste">;
            onPasteCapture?: EventHandler<"paste">;
    
            // Focus Events
            onFocus?: EventHandler<"focus">;
            onFocusCapture?: EventHandler<"focus">;
            onBlur?: EventHandler<"blur">;
            onBlurCapture?: EventHandler<"blur">;
    
            // Form Events
            onChange?: EventHandler<"change">;
            onChangeCapture?: EventHandler<"change">;
            onBeforeInput?: EventHandler<"input">;
            onBeforeInputCapture?: EventHandler<"input">;
            onInput?: EventHandler<"input">;
            onInputCapture?: EventHandler<"input">;
            onReset?: EventHandler<"reset">;
            onResetCapture?: EventHandler<"reset">;
            onSubmit?: EventHandler<"submit">;
            onSubmitCapture?: EventHandler<"submit">;
            onInvalid?: EventHandler<"invalid">;
            onInvalidCapture?: EventHandler<"invalid">;
    
            // Image Events
            onLoad?: EventHandler<"load">;
            onLoadCapture?: EventHandler<"load">;
            onError?: EventHandler<"error">; // also a Media Event
            onErrorCapture?: EventHandler<"error">; // also a Media Event
    
            // Keyboard Events
            onKeyDown?: EventHandler<"keydown">;
            onKeyDownCapture?: EventHandler<"keydown">;
            onKeyPress?: EventHandler<"keypress">;
            onKeyPressCapture?: EventHandler<"keypress">;
            onKeyUp?: EventHandler<"keyup">;
            onKeyUpCapture?: EventHandler<"keyup">;
    
            // Media Events
            onAbort?: EventHandler<"abort">;
            onAbortCapture?: EventHandler<"abort">;
            onCanPlay?: EventHandler<"canplay">;
            onCanPlayCapture?: EventHandler<"canplay">;
            onCanPlayThrough?: EventHandler<"canplaythrough">;
            onCanPlayThroughCapture?: EventHandler<"canplaythrough">;
            onDurationChange?: EventHandler<"change">;
            onDurationChangeCapture?: EventHandler<"change">;
            onEmptied?: EventHandler<"emptied">;
            onEmptiedCapture?: EventHandler<"emptied">;
            onEnded?: EventHandler<"ended">;
            onEndedCapture?: EventHandler<"ended">;
            onLoadedData?: EventHandler<"loadeddata">;
            onLoadedDataCapture?: EventHandler<"loadeddata">;
            onLoadedMetadata?: EventHandler<"loadedmetadata">;
            onLoadedMetadataCapture?: EventHandler<"loadedmetadata">;
            onLoadStart?: EventHandler<"loadstart">;
            onLoadStartCapture?: EventHandler<"loadstart">;
            onPause?: EventHandler<"pause">;
            onPauseCapture?: EventHandler<"pause">;
            onPlay?: EventHandler<"play">;
            onPlayCapture?: EventHandler<"play">;
            onPlaying?: EventHandler<"playing">;
            onPlayingCapture?: EventHandler<"playing">;
            onProgress?: EventHandler<"progress">;
            onProgressCapture?: EventHandler<"progress">;
            onRateChange?: EventHandler<"ratechange">;
            onRateChangeCapture?: EventHandler<"ratechange">;
            onSeeked?: EventHandler<"seeked">;
            onSeekedCapture?: EventHandler<"seeked">;
            onSeeking?: EventHandler<"seeking">;
            onSeekingCapture?: EventHandler<"seeking">;
            onStalled?: EventHandler<"stalled">;
            onStalledCapture?: EventHandler<"stalled">;
            onSuspend?: EventHandler<"suspend">;
            onSuspendCapture?: EventHandler<"suspend">;
            onTimeUpdate?: EventHandler<"timeupdate">;
            onTimeUpdateCapture?: EventHandler<"timeupdate">;
            onVolumeChange?: EventHandler<"volumechange">;
            onVolumeChangeCapture?: EventHandler<"volumechange">;
            onWaiting?: EventHandler<"waiting">;
            onWaitingCapture?: EventHandler<"waiting">;
    
            // MouseEvents
            onAuxClick?: EventHandler<"auxclick">;
            onAuxClickCapture?: EventHandler<"auxclick">;
            onClick?: EventHandler<"click">;
            onClickCapture?: EventHandler<"click">;
            onContextMenu?: EventHandler<"contextmenu">;
            onContextMenuCapture?: EventHandler<"contextmenu">;
            onDoubleClick?: EventHandler<"dblclick">;
            onDoubleClickCapture?: EventHandler<"dblclick">;
            onDrag?: EventHandler<"drag">;
            onDragCapture?: EventHandler<"drag">;
            onDragEnd?: EventHandler<"dragend">;
            onDragEndCapture?: EventHandler<"dragend">;
            onDragEnter?: EventHandler<"dragenter">;
            onDragEnterCapture?: EventHandler<"dragenter">;
            onDragExit?: EventHandler<"dragexit">;
            onDragExitCapture?: EventHandler<"dragexit">;
            onDragLeave?: EventHandler<"dragleave">;
            onDragLeaveCapture?: EventHandler<"dragleave">;
            onDragOver?: EventHandler<"dragover">;
            onDragOverCapture?: EventHandler<"dragover">;
            onDragStart?: EventHandler<"dragstart">;
            onDragStartCapture?: EventHandler<"dragstart">;
            onDrop?: EventHandler<"drop">;
            onDropCapture?: EventHandler<"drop">;
            onMouseDown?: EventHandler<"mousedown">;
            onMouseDownCapture?: EventHandler<"mousedown">;
            onMouseEnter?: EventHandler<"mouseenter">;
            onMouseLeave?: EventHandler<"mouseleave">;
            onMouseMove?: EventHandler<"mousemove">;
            onMouseMoveCapture?: EventHandler<"mousemove">;
            onMouseOut?: EventHandler<"mouseout">;
            onMouseOutCapture?: EventHandler<"mouseout">;
            onMouseOver?: EventHandler<"mouseover">;
            onMouseOverCapture?: EventHandler<"mouseover">;
            onMouseUp?: EventHandler<"mouseup">;
            onMouseUpCapture?: EventHandler<"mouseup">;
    
            // Selection Events
            onSelect?: EventHandler<"select">;
            onSelectCapture?: EventHandler<"select">;
    
            // Touch Events
            onTouchCancel?: EventHandler<"touchcancel">;
            onTouchCancelCapture?: EventHandler<"touchcancel">;
            onTouchEnd?: EventHandler<"touchend">;
            onTouchEndCapture?: EventHandler<"touchend">;
            onTouchMove?: EventHandler<"touchmove">;
            onTouchMoveCapture?: EventHandler<"touchmove">;
            onTouchStart?: EventHandler<"touchstart">;
            onTouchStartCapture?: EventHandler<"touchstart">;
    
            // Pointer Events
            onPointerDown?: EventHandler<"pointerdown">;
            onPointerDownCapture?: EventHandler<"pointerdown">;
            onPointerMove?: EventHandler<"pointermove">;
            onPointerMoveCapture?: EventHandler<"pointermove">;
            onPointerUp?: EventHandler<"pointerup">;
            onPointerUpCapture?: EventHandler<"pointerup">;
            onPointerCancel?: EventHandler<"pointercancel">;
            onPointerCancelCapture?: EventHandler<"pointercancel">;
            onPointerEnter?: EventHandler<"pointerenter">;
            onPointerEnterCapture?: EventHandler<"pointerenter">;
            onPointerLeave?: EventHandler<"pointerleave">;
            onPointerLeaveCapture?: EventHandler<"pointerleave">;
            onPointerOver?: EventHandler<"pointerover">;
            onPointerOverCapture?: EventHandler<"pointerover">;
            onPointerOut?: EventHandler<"pointerout">;
            onPointerOutCapture?: EventHandler<"pointerout">;
            onGotPointerCapture?: EventHandler<"gotpointercapture">;
            onGotPointerCaptureCapture?: EventHandler<"gotpointercapture">;
            onLostPointerCapture?: EventHandler<"lostpointercapture">;
            onLostPointerCaptureCapture?: EventHandler<"lostpointercapture">;
    
            // UI Events
            onScroll?: EventHandler<"scroll">;
            onScrollCapture?: EventHandler<"scroll">;
    
            // Wheel Events
            onWheel?: EventHandler<"wheel">;
            onWheelCapture?: EventHandler<"wheel">;
    
            // Animation Events
            onAnimationStart?: EventHandler<"animationstart">;
            onAnimationStartCapture?: EventHandler<"animationstart">;
            onAnimationEnd?: EventHandler<"animationend">;
            onAnimationEndCapture?: EventHandler<"animationend">;
            onAnimationIteration?: EventHandler<"animationiteration">;
            onAnimationIterationCapture?: EventHandler<"animationiteration">;
    
            // Transition Events
            onTransitionEnd?: EventHandler<"transitionend">;
            onTransitionEndCapture?: EventHandler<"transitionend">;
        }
    
        export interface CSSProperties extends CSS.Properties<string | number> {
            /**
             * The index signature was removed to enable closed typing for style
             * using CSSType. You're able to use type assertion or module augmentation
             * to add properties or an index signature of your own.
             *
             * For examples and more information, visit:
             * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
             */
        }
    
    
        interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
            // Standard HTML Attributes
            accessKey?: string;
            class?: string;
            contentEditable?: Booleanish | "inherit";
            contextMenu?: string;
            dir?: string;
            draggable?: Booleanish;
            hidden?: boolean;
            id?: string;
            lang?: string;
            placeholder?: string;
            slot?: string;
            spellCheck?: Booleanish;
            style?: CSSProperties | string;
            tabIndex?: number;
            title?: string;
            translate?: 'yes' | 'no';
    
            // Unknown
            radioGroup?: string; // <command>, <menuitem>
    
            // WAI-ARIA
            role?: string;
    
            // RDFa Attributes
            about?: string;
            datatype?: string;
            inlist?: any;
            prefix?: string;
            property?: string;
            resource?: string;
            typeof?: string;
            vocab?: string;
    
            // Non-standard Attributes
            autoCapitalize?: string;
            autoCorrect?: string;
            autoSave?: string;
            color?: string;
            itemProp?: string;
            itemScope?: boolean;
            itemType?: string;
            itemID?: string;
            itemRef?: string;
            results?: number;
            security?: string;
            unselectable?: 'on' | 'off';
    
            // Living Standard
            /**
             * Hints at the type of data that might be entered by the user while editing the element or its contents
             * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
             */
            inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
            /**
             * Specify that a standard HTML element should behave like a defined custom built-in element
             * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
             */
            is?: string;
        }
    
        interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
            // Standard HTML Attributes
            accept?: string;
            acceptCharset?: string;
            action?: string;
            allowFullScreen?: boolean;
            allowTransparency?: boolean;
            alt?: string;
            as?: string;
            async?: boolean;
            autoComplete?: string;
            autoFocus?: boolean;
            autoPlay?: boolean;
            capture?: boolean | string;
            cellPadding?: number | string;
            cellSpacing?: number | string;
            charSet?: string;
            challenge?: string;
            checked?: boolean;
            cite?: string;
            classID?: string;
            cols?: number;
            colSpan?: number;
            content?: string;
            controls?: boolean;
            coords?: string;
            crossOrigin?: string;
            data?: string;
            dateTime?: string;
            default?: boolean;
            defer?: boolean;
            disabled?: boolean;
            download?: any;
            encType?: string;
            form?: string;
            formAction?: string;
            formEncType?: string;
            formMethod?: string;
            formNoValidate?: boolean;
            formTarget?: string;
            frameBorder?: number | string;
            headers?: string;
            height?: number | string;
            high?: number;
            href?: string;
            hrefLang?: string;
            htmlFor?: string;
            httpEquiv?: string;
            integrity?: string;
            keyParams?: string;
            keyType?: string;
            kind?: string;
            label?: string;
            list?: string;
            loop?: boolean;
            low?: number;
            manifest?: string;
            marginHeight?: number;
            marginWidth?: number;
            max?: number | string;
            maxLength?: number;
            media?: string;
            mediaGroup?: string;
            method?: string;
            min?: number | string;
            minLength?: number;
            multiple?: boolean;
            muted?: boolean;
            name?: string;
            nonce?: string;
            noValidate?: boolean;
            open?: boolean;
            optimum?: number;
            pattern?: string;
            placeholder?: string;
            playsInline?: boolean;
            poster?: string;
            preload?: string;
            readOnly?: boolean;
            rel?: string;
            required?: boolean;
            reversed?: boolean;
            rows?: number;
            rowSpan?: number;
            sandbox?: string;
            scope?: string;
            scoped?: boolean;
            scrolling?: string;
            seamless?: boolean;
            selected?: boolean;
            shape?: string;
            size?: number;
            sizes?: string;
            span?: number;
            src?: string;
            srcDoc?: string;
            srcLang?: string;
            srcSet?: string;
            start?: number;
            step?: number | string;
            summary?: string;
            target?: string;
            type?: string;
            useMap?: string;
            value?: string | string[] | number;
            width?: number | string;
            wmode?: string;
            wrap?: string;
        }
    
        interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
            download?: any;
            href?: string;
            hrefLang?: string;
            media?: string;
            ping?: string;
            rel?: string;
            target?: string;
            type?: string;
            referrerPolicy?: string;
        }
    
        // tslint:disable-next-line:no-empty-interface
        interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> { }
    
        interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
            alt?: string;
            coords?: string;
            download?: any;
            href?: string;
            hrefLang?: string;
            media?: string;
            rel?: string;
            shape?: string;
            target?: string;
        }
    
        interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
            href?: string;
            target?: string;
        }
    
        interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
            cite?: string;
        }
    
        interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
            autoFocus?: boolean;
            disabled?: boolean;
            form?: string;
            formAction?: string;
            formEncType?: string;
            formMethod?: string;
            formNoValidate?: boolean;
            formTarget?: string;
            name?: string;
            type?: 'submit' | 'reset' | 'button';
            value?: string | string[] | number;
        }
    
        interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
            height?: number | string;
            width?: number | string;
        }
    
        interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
            span?: number;
            width?: number | string;
        }
    
        interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
            span?: number;
        }
    
        interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
            value?: string | string[] | number;
        }
    
        interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
            open?: boolean;
        }
    
        interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
            cite?: string;
            dateTime?: string;
        }
    
        interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
            open?: boolean;
        }
    
        interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
            height?: number | string;
            src?: string;
            type?: string;
            width?: number | string;
        }
    
        interface FontHTMLAttributes<T> extends HTMLAttributes<T> {
            disabled?: boolean;
            form?: string;
            name?: string;
        }
    
        interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
            disabled?: boolean;
            form?: string;
            name?: string;
        }
    
        interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
            acceptCharset?: string;
            action?: string;
            autoComplete?: string;
            encType?: string;
            method?: string;
            name?: string;
            noValidate?: boolean;
            target?: string;
        }
    
        interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
            manifest?: string;
        }
    
        interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
            allow?: string;
            allowFullScreen?: boolean;
            allowTransparency?: boolean;
            frameBorder?: number | string;
            height?: number | string;
            marginHeight?: number;
            marginWidth?: number;
            name?: string;
            referrerPolicy?: string;
            sandbox?: string;
            scrolling?: string;
            seamless?: boolean;
            src?: string;
            srcDoc?: string;
            width?: number | string;
        }
    
        interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
            alt?: string;
            crossOrigin?: "anonymous" | "use-credentials" | "";
            decoding?: "async" | "auto" | "sync";
            height?: number | string;
            loading?: "eager" | "lazy";
            referrerPolicy?: "no-referrer" | "origin" | "unsafe-url";
            sizes?: string;
            src?: string;
            srcSet?: string;
            useMap?: string;
            width?: number | string;
        }
    
        interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
            cite?: string;
            dateTime?: string;
        }
    
        interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
            accept?: string;
            alt?: string;
            autoComplete?: string;
            autoFocus?: boolean;
            capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
            checked?: boolean;
            crossOrigin?: string;
            disabled?: boolean;
            form?: string;
            formAction?: string;
            formEncType?: string;
            formMethod?: string;
            formNoValidate?: boolean;
            formTarget?: string;
            height?: number | string;
            list?: string;
            max?: number | string;
            maxLength?: number;
            min?: number | string;
            minLength?: number;
            multiple?: boolean;
            name?: string;
            pattern?: string;
            placeholder?: string;
            readOnly?: boolean;
            required?: boolean;
            size?: number;
            src?: string;
            step?: number | string;
            type?: string;
            value?: string | string[] | number;
            width?: number | string;
        }
    
        interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
            autoFocus?: boolean;
            challenge?: string;
            disabled?: boolean;
            form?: string;
            keyType?: string;
            keyParams?: string;
            name?: string;
        }
    
        interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
            form?: string;
            htmlFor?: string;
        }
    
        interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
            value?: string | string[] | number;
        }
    
        interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
            as?: string;
            crossOrigin?: string;
            href?: string;
            hrefLang?: string;
            integrity?: string;
            media?: string;
            rel?: string;
            sizes?: string;
            type?: string;
        }
    
        interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
            name?: string;
        }
    
        interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
            type?: string;
        }
    
        interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
            autoPlay?: boolean;
            controls?: boolean;
            controlsList?: string;
            crossOrigin?: string;
            loop?: boolean;
            mediaGroup?: string;
            muted?: boolean;
            playsinline?: boolean;
            preload?: string;
            src?: string;
        }
    
        interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
            charSet?: string;
            content?: string;
            httpEquiv?: string;
            name?: string;
        }
    
        interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
            form?: string;
            high?: number;
            low?: number;
            max?: number | string;
            min?: number | string;
            optimum?: number;
            value?: string | string[] | number;
        }
    
        interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
            cite?: string;
        }
    
        interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
            classID?: string;
            data?: string;
            form?: string;
            height?: number | string;
            name?: string;
            type?: string;
            useMap?: string;
            width?: number | string;
            wmode?: string;
        }
    
        interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
            reversed?: boolean;
            start?: number;
            type?: '1' | 'a' | 'A' | 'i' | 'I';
        }
    
        interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
            disabled?: boolean;
            label?: string;
        }
    
        interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
            disabled?: boolean;
            label?: string;
            selected?: boolean;
            value?: string | string[] | number;
        }
    
        interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
            form?: string;
            htmlFor?: string;
            name?: string;
        }
    
        interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
            name?: string;
            value?: string | string[] | number;
        }
    
        interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
            max?: number | string;
            value?: string | string[] | number;
        }
    
        interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
            async?: boolean;
            charSet?: string;
            crossOrigin?: string;
            defer?: boolean;
            integrity?: string;
            noModule?: boolean;
            nonce?: string;
            src?: string;
            type?: string;
        }
    
        interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
            autoComplete?: string;
            autoFocus?: boolean;
            disabled?: boolean;
            form?: string;
            multiple?: boolean;
            name?: string;
            required?: boolean;
            size?: number;
            value?: string | string[] | number;
        }
    
        interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
            media?: string;
            sizes?: string;
            src?: string;
            srcSet?: string;
            type?: string;
        }
    
        interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
            media?: string;
            nonce?: string;
            scoped?: boolean;
            type?: string;
        }
    
        interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
            cellPadding?: number | string;
            cellSpacing?: number | string;
            summary?: string;
        }
    
        interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
            autoComplete?: string;
            autoFocus?: boolean;
            cols?: number;
            dirName?: string;
            disabled?: boolean;
            form?: string;
            maxLength?: number;
            minLength?: number;
            name?: string;
            placeholder?: string;
            readOnly?: boolean;
            required?: boolean;
            rows?: number;
            value?: string | string[] | number;
            wrap?: string;
        }
    
        interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
            align?: "left" | "center" | "right" | "justify" | "char";
            colSpan?: number;
            headers?: string;
            rowSpan?: number;
            scope?: string;
            abbr?: string;
            valign?: "top" | "middle" | "bottom" | "baseline";
        }
    
        interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
            align?: "left" | "center" | "right" | "justify" | "char";
            colSpan?: number;
            headers?: string;
            rowSpan?: number;
            scope?: string;
            abbr?: string;
        }
    
        interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
            dateTime?: string;
        }
    
        interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
            default?: boolean;
            kind?: string;
            label?: string;
            src?: string;
            srcLang?: string;
        }
    
        interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
            height?: number | string;
            playsInline?: boolean;
            poster?: string;
            width?: number | string;
            disablePictureInPicture?: boolean;
        }
    
        // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
        interface AriaAttributes {
            /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
            'aria-activedescendant'?: string;
            /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
            'aria-atomic'?: boolean | 'false' | 'true';
            /**
             * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
             * presented if they are made.
             */
            'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
            /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
            'aria-busy'?: boolean | 'false' | 'true';
            /**
             * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
             * @see aria-pressed @see aria-selected.
             */
            'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
            /**
             * Defines the total number of columns in a table, grid, or treegrid.
             * @see aria-colindex.
             */
            'aria-colcount'?: number;
            /**
             * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
             * @see aria-colcount @see aria-colspan.
             */
            'aria-colindex'?: number;
            /**
             * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-colindex @see aria-rowspan.
             */
            'aria-colspan'?: number;
            /**
             * Identifies the element (or elements) whose contents or presence are controlled by the current element.
             * @see aria-owns.
             */
            'aria-controls'?: string;
            /** Indicates the element that represents the current item within a container or set of related elements. */
            'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
            /**
             * Identifies the element (or elements) that describes the object.
             * @see aria-labelledby
             */
            'aria-describedby'?: string;
            /**
             * Identifies the element that provides a detailed, extended description for the object.
             * @see aria-describedby.
             */
            'aria-details'?: string;
            /**
             * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
             * @see aria-hidden @see aria-readonly.
             */
            'aria-disabled'?: boolean | 'false' | 'true';
            /**
             * Indicates what functions can be performed when a dragged object is released on the drop target.
             * @deprecated in ARIA 1.1
             */
            'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
            /**
             * Identifies the element that provides an error message for the object.
             * @see aria-invalid @see aria-describedby.
             */
            'aria-errormessage'?: string;
            /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
            'aria-expanded'?: boolean | 'false' | 'true';
            /**
             * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
             * allows assistive technology to override the general default of reading in document source order.
             */
            'aria-flowto'?: string;
            /**
             * Indicates an element's "grabbed" state in a drag-and-drop operation.
             * @deprecated in ARIA 1.1
             */
            'aria-grabbed'?: boolean | 'false' | 'true';
            /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
            'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
            /**
             * Indicates whether the element is exposed to an accessibility API.
             * @see aria-disabled.
             */
            'aria-hidden'?: boolean | 'false' | 'true';
            /**
             * Indicates the entered value does not conform to the format expected by the application.
             * @see aria-errormessage.
             */
            'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
            /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
            'aria-keyshortcuts'?: string;
            /**
             * Defines a string value that labels the current element.
             * @see aria-labelledby.
             */
            'aria-label'?: string;
            /**
             * Identifies the element (or elements) that labels the current element.
             * @see aria-describedby.
             */
            'aria-labelledby'?: string;
            /** Defines the hierarchical level of an element within a structure. */
            'aria-level'?: number;
            /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
            'aria-live'?: 'off' | 'assertive' | 'polite';
            /** Indicates whether an element is modal when displayed. */
            'aria-modal'?: boolean | 'false' | 'true';
            /** Indicates whether a text box accepts multiple lines of input or only a single line. */
            'aria-multiline'?: boolean | 'false' | 'true';
            /** Indicates that the user may select more than one item from the current selectable descendants. */
            'aria-multiselectable'?: boolean | 'false' | 'true';
            /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
            'aria-orientation'?: 'horizontal' | 'vertical';
            /**
             * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
             * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
             * @see aria-controls.
             */
            'aria-owns'?: string;
            /**
             * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
             * A hint could be a sample value or a brief description of the expected format.
             */
            'aria-placeholder'?: string;
            /**
             * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-setsize.
             */
            'aria-posinset'?: number;
            /**
             * Indicates the current "pressed" state of toggle buttons.
             * @see aria-checked @see aria-selected.
             */
            'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
            /**
             * Indicates that the element is not editable, but is otherwise operable.
             * @see aria-disabled.
             */
            'aria-readonly'?: boolean | 'false' | 'true';
            /**
             * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
             * @see aria-atomic.
             */
            'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
            /** Indicates that user input is required on the element before a form may be submitted. */
            'aria-required'?: boolean | 'false' | 'true';
            /** Defines a human-readable, author-localized description for the role of an element. */
            'aria-roledescription'?: string;
            /**
             * Defines the total number of rows in a table, grid, or treegrid.
             * @see aria-rowindex.
             */
            'aria-rowcount'?: number;
            /**
             * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
             * @see aria-rowcount @see aria-rowspan.
             */
            'aria-rowindex'?: number;
            /**
             * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-rowindex @see aria-colspan.
             */
            'aria-rowspan'?: number;
            /**
             * Indicates the current "selected" state of various widgets.
             * @see aria-checked @see aria-pressed.
             */
            'aria-selected'?: boolean | 'false' | 'true';
            /**
             * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-posinset.
             */
            'aria-setsize'?: number;
            /** Indicates if items in a table or grid are sorted in ascending or descending order. */
            'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
            /** Defines the maximum allowed value for a range widget. */
            'aria-valuemax'?: number;
            /** Defines the minimum allowed value for a range widget. */
            'aria-valuemin'?: number;
            /**
             * Defines the current value for a range widget.
             * @see aria-valuetext.
             */
            'aria-valuenow'?: number;
            /** Defines the human readable text alternative of aria-valuenow for a range widget. */
            'aria-valuetext'?: string;
        }
    }
}


