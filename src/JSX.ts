

/**
 * Code was modified based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 * which licensed under the MIT license (https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/LICENSE)
 * 
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */

import * as CSS from "csstype";
import { Attributes, ClassAttributes, RefAttributes } from "./interfaces";


type Booleanish = boolean | "true" | "false";
type LiteralUnion<T extends U, U = string> = T | (U & {});
type AttrTarget = LiteralUnion<"_self" | "_blank" | "_parent" | "_top">;
type LangCodeBCP47 = LiteralUnion<
    "ar" | "ar-SA" |
    "cs" | "cs-CZ" |
    "da" | "da-DK" |
    "de" | "de-DE" |
    "el" | "el-GR" |
    "en" | "en-AU" | "en-GB" | "en-IE" | "en-US" | "en-ZA" |
    "es" | "es-ES" | "es-MX" |
    "fi" | "fi-FI" |
    "fr" | "fr-CA" | "fr-FR" |
    "he" | "he-IL" |
    "hi" | "hi-IN" |
    "hu" | "hu-HU" |
    "id" | "id-ID" |
    "it" | "it-IT" |
    "ja" | "ja-JP" |
    "ko" | "ko-KR" |
    "nl" | "nl-BE" | "nl-NL" |
    "no" | "no-NO" |
    "pl" | "pl-PL" |
    "pt" | "pt-BR" | "pt-PT" |
    "ro" | "ro-RO" |
    "ru" | "ru-RU" |
    "sk" | "sk-SK" |
    "sv" | "sv-SE" |
    "th" | "th-TH" |
    "tr" | "tr-TR" |
    "zh" | "zh-CN" | "zh-HK" | "zh-TW">;

type EventHandler<T, K extends keyof HTMLElementEventMap> = (this: T, ev: HTMLElementEventMap[K]) => any;

declare global {
    namespace JSX {
        type Element = Node;

        type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

        interface IntrinsicAttributes extends Attributes { }
        interface IntrinsicClassAttributes<T> extends RefAttributes<T> { }

        //HTMLElementTagNameMap
        interface IntrinsicElements {
            /**
             * The HTML &lt;a&gt; element (or anchor element), with its href attribute, creates a hyperlink to web
             * pages, files, email addresses, locations in the same page, or anything else a URL can address.
             * Content within each &lt;a&gt; should indicate the link's destination.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
             */
            "a": DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            /**
             * The HTML Abbreviation element (&lt;abbr&gt;) represents an abbreviation or acronym; the optional
             * title attribute can provide an expansion or description for the abbreviation. If present, title must
             * contain this full description and nothing else.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
             */
            "abbr": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;address&gt; element indicates that the enclosed HTML provides contact information for a
             * person or people, or for an organization.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
             */
            "address": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;area&gt; element defines a hot-spot region on an image, and optionally associates it
             * with a hypertext link. This element is used only within a &lt;map&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
             */
            "area": DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            /**
             * The HTML &lt;article&gt; element represents a self-contained composition in a document, page,
             * application, or site, which is intended to be independently distributable or reusable (e.g., in
             * syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
             */
            "article": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;aside&gt; element represents a portion of a document whose content is only indirectly
             * related to the document's main content. Asides are frequently presented as sidebars or call-out
             * boxes.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
             */
            "aside": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;audio&gt; element is used to embed sound content in documents. It may contain one or
             * more audio sources, represented using the src attribute or the &lt;source&gt; element: the browser
             * will choose the most suitable one. It can also be the destination for streamed media, using a
             * MediaStream.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
             */
            "audio": DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            /**
             * The HTML Bring Attention To element (&lt;b&gt;) is used to draw the reader's attention to the
             * element's contents, which are not otherwise granted special importance. This was formerly known as
             * the Boldface element, and most browsers still draw the text in boldface. However, you should not use
             * &lt;b&gt; for styling text; instead, you should use the CSS font-weight property to create boldface
             * text, or the &lt;strong&gt; element to indicate that text is of special importance.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
             */
            "b": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;base&gt; element specifies the base URL to use for all relative URLs in a document.
             * There can be only one &lt;base&gt; element in a document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
             */
            "base": DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            /**
             * The HTML Bidirectional Isolate element (&lt;bdi&gt;) tells the browser's bidirectional algorithm to
             * treat the text it contains in isolation from its surrounding text. It's particularly useful when a
             * website dynamically inserts some text and doesn't know the directionality of the text being
             * inserted.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
             */
            "bdi": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Bidirectional Text Override element (&lt;bdo&gt;) overrides the current directionality of
             * text, so that the text within is rendered in a different direction.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
             */
            "bdo": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;blockquote&gt; Element (or HTML Block Quotation Element) indicates that the enclosed
             * text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how
             * to change it). A URL for the source of the quotation may be given using the cite attribute, while a
             * text representation of the source can be given using the &lt;cite&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
             */
            "blockquote": DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            /**
             * The HTML &lt;body&gt; Element represents the content of an HTML document. There can be only one
             * &lt;body&gt; element in a document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
             */
            "body": DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            /**
             * The HTML &lt;br&gt; element produces a line break in text (carriage-return). It is useful for writing
             * a poem or an address, where the division of lines is significant.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
             */
            "br": DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            /**
             * The HTML &lt;button&gt; element represents a clickable button, used to submit forms or anywhere in a
             * document for accessible, standard button functionality. By default, HTML buttons are presented in a
             * style resembling the platform the user agent runs on, but you can change buttons’ appearance with
             * CSS.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
             */
            "button": DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            /**
             * Use the HTML &lt;canvas&gt; element with either the canvas scripting API or the WebGL API to draw
             * graphics and animations.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
             */
            "canvas": DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            /**
             * The HTML &lt;caption&gt; element specifies the caption (or title) of a table.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
             */
            "caption": DetailedHTMLProps<HTMLAttributes<HTMLTableCaptionElement>, HTMLTableCaptionElement>;
            /**
             * The HTML Citation element (&lt;cite&gt;) is used to describe a reference to a cited creative work,
             * and must include the title of that work. The reference may be in an abbreviated form according to
             * context-appropriate conventions related to citation metadata.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
             */
            "cite": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;code&gt; element displays its contents styled in a fashion intended to indicate that the
             * text is a short fragment of computer code. By default, the content text is displayed using the user
             * agent's default monospace font.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
             */
            "code": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;col&gt; element defines a column within a table and is used for defining common
             * semantics on all common cells. It is generally found within a &lt;colgroup&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
             */
            "col": DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            /**
             * The HTML &lt;colgroup&gt; element defines a group of columns within a table.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
             */
            "colgroup": DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            /**
             * The HTML &lt;data&gt; element links a given piece of content with a machine-readable translation. If
             * the content is time- or date-related, the &lt;time&gt; element must be used.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
             */
            "data": DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            /**
             * The HTML &lt;datalist&gt; element contains a set of &lt;option&gt; elements that represent the
             * permissible or recommended options available to choose from within other controls.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
             */
            "datalist": DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            /**
             * The HTML &lt;dd&gt; element provides the description, definition, or value for the preceding term
             * (&lt;dt&gt;) in a description list (&lt;dl&gt;).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
             */
            "dd": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;del&gt; element represents a range of text that has been deleted from a document. This
             * can be used when rendering "track changes" or source code diff information, for example. The
             * &lt;ins&gt; element can be used for the opposite purpose: to indicate text that has been added to the
             * document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
             */
            "del": DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            /**
             * The HTML Details Element (&lt;details&gt;) creates a disclosure widget in which information is
             * visible only when the widget is toggled into an "open" state. A summary or label can be provided
             * using the &lt;summary&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
             */
            "details": DetailedHTMLProps<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            /**
             * The HTML Definition element (&lt;dfn&gt;) is used to indicate the term being defined within the
             * context of a definition phrase or sentence. The &lt;p&gt; element, the &lt;dt&gt;/&lt;dd&gt; pairing,
             * or the &lt;section&gt; element which is the nearest ancestor of the &lt;dfn&gt; is considered to be
             * the definition of the term.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
             */
            "dfn": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;dialog&gt; element represents a dialog box or other interactive component, such as a
             * dismissable alert, inspector, or subwindow.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
             */
            "dialog": DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            /**
             * ObsoleteThis feature is obsolete. Although it may still work in some browsers, its use is discouraged
             * since it could be removed at any time. Try to avoid using it.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir
             */
            "dir": DetailedHTMLProps<HTMLAttributes<HTMLDirectoryElement>, HTMLDirectoryElement>;
            /**
             * The HTML Content Division element (&lt;div&gt;) is the generic container for flow content. It has no
             * effect on the content or layout until styled using CSS.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
             */
            "div": DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            /**
             * The HTML &lt;dl&gt; element represents a description list. The element encloses a list of groups of
             * terms (specified using the &lt;dt&gt; element) and descriptions (provided by &lt;dd&gt; elements).
             * Common uses for this element are to implement a glossary or to display metadata (a list of key-value
             * pairs).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
             */
            "dl": DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            /**
             * The HTML &lt;dt&gt; element specifies a term in a description or definition list, and as such must be
             * used inside a &lt;dl&gt; element. It is usually followed by a &lt;dd&gt; element; however, multiple
             * &lt;dt&gt; elements in a row indicate several terms that are all defined by the immediate next
             * &lt;dd&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
             */
            "dt": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;em&gt; element marks text that has stress emphasis. The &lt;em&gt; element can be
             * nested, with each level of nesting indicating a greater degree of emphasis.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
             */
            "em": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;embed&gt; element embeds external content at the specified point in the document. This
             * content is provided by an external application or other source of interactive content such as a
             * browser plug-in.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
             */
            "embed": DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            /**
             * The HTML &lt;fieldset&gt; element is used to group several controls as well as labels (&lt;label&gt;)
             * within a web form.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
             */
            "fieldset": DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            /**
             * The HTML &lt;figcaption&gt; or Figure Caption element represents a caption or legend describing the
             * rest of the contents of its parent &lt;figure&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
             */
            "figcaption": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;figure&gt; (Figure With Optional Caption) element represents self-contained content,
             * potentially with an optional caption, which is specified using the (&lt;figcaption&gt;) element. The
             * figure, its caption, and its contents are referenced as a single unit.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
             */
            "figure": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * ObsoleteThis feature is obsolete. Although it may still work in some browsers, its use is discouraged
             * since it could be removed at any time. Try to avoid using it.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font
             */
            "font": DetailedHTMLProps<FontHTMLAttributes<HTMLFontElement>, HTMLFontElement>;
            /**
             * The HTML &lt;footer&gt; element represents a footer for its nearest sectioning content or sectioning
             * root element. A footer typically contains information about the author of the section, copyright data
             * or links to related documents.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
             */
            "footer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;form&gt; element represents a document section containing interactive controls for
             * submitting information.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
             */
            "form": DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
             */
            "h1": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
             */
            "h2": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
             */
            "h3": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
             */
            "h4": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5
             */
            "h5": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the
             * highest section level and &lt;h6&gt; is the lowest.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
             */
            "h6": DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            /**
             * The HTML &lt;head&gt; element contains machine-readable information (metadata) about the document,
             * like its title, scripts, and style sheets.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
             */
            "head": DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            /**
             * The HTML &lt;header&gt; element represents introductory content, typically a group of introductory or
             * navigational aids. It may contain some heading elements but also a logo, a search form, an author
             * name, and other elements.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
             */
            "header": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;hgroup&gt; element represents a multi-level heading for a section of a document. It
             * groups a set of &lt;h1&gt;–&lt;h6&gt; elements.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
             */
            "hgroup": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;hr&gt; element represents a thematic break between paragraph-level elements: for
             * example, a change of scene in a story, or a shift of topic within a section.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
             */
            "hr": DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            /**
             * The HTML &lt;html&gt; element represents the root (top-level element) of an HTML document, so it is
             * also referred to as the root element. All other elements must be descendants of this element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
             */
            "html": DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            /**
             * The HTML Idiomatic Text element (&lt;i&gt;) represents a range of text that is set off from the
             * normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among
             * others. Historically, these have been presented using italicized type, which is the original source
             * of the &lt;i&gt; naming of this element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
             */
            "i": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Inline Frame element (&lt;iframe&gt;) represents a nested browsing context, embedding
             * another HTML page into the current one.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
             */
            "iframe": DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            /**
             * The HTML &lt;img&gt; element embeds an image into the document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
             */
            "img": DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            /**
             * The HTML &lt;input&gt; element is used to create interactive controls for web-based forms in order to
             * accept data from the user; a wide variety of types of input data and control widgets are available,
             * depending on the device and user agent. The &lt;input&gt; element is one of the most powerful and
             * complex in all of HTML due to the sheer number of combinations of input types and attributes.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
             */
            "input": DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            /**
             * The HTML &lt;ins&gt; element represents a range of text that has been added to a document. You can
             * use the &lt;del&gt; element to similarly represent a range of text that has been deleted from the
             * document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
             */
            "ins": DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            /**
             * The HTML Keyboard Input element (&lt;kbd&gt;) represents a span of inline text denoting textual user
             * input from a keyboard, voice input, or any other text entry device. By convention, the user agent
             * defaults to rendering the contents of a &lt;kbd&gt; element using its default monospace font,
             * although this is not mandated by the HTML standard.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
             */
            "kbd": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;label&gt; element represents a caption for an item in a user interface.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
             */
            "label": DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            /**
             * The HTML &lt;legend&gt; element represents a caption for the content of its parent
             * &lt;fieldset&gt;.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
             */
            "legend": DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            /**
             * The HTML &lt;li&gt; element is used to represent an item in a list. It must be contained in a parent
             * element: an ordered list (&lt;ol&gt;), an unordered list (&lt;ul&gt;), or a menu (&lt;menu&gt;). In
             * menus and unordered lists, list items are usually displayed using bullet points. In ordered lists,
             * they are usually displayed with an ascending counter on the left, such as a number or letter.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
             */
            "li": DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            /**
             * The HTML External Resource Link element (&lt;link&gt;) specifies relationships between the current
             * document and an external resource. This element is most commonly used to link to stylesheets, but is
             * also used to establish site icons (both "favicon" style icons and icons for the home screen and apps
             * on mobile devices) among other things.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
             */
            "link": DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            /**
             * The HTML &lt;main&gt; element represents the dominant content of the &lt;body&gt; of a document. The
             * main content area consists of content that is directly related to or expands upon the central topic
             * of a document, or the central functionality of an application.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
             */
            "main": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;map&gt; element is used with &lt;area&gt; elements to define an image map (a clickable
             * link area).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
             */
            "map": DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            /**
             * The HTML Mark Text element (&lt;mark&gt;) represents text which is marked or highlighted for
             * reference or notation purposes, due to the marked passage's relevance or importance in the enclosing
             * context.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
             */
            "mark": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * This is an experimental technologyCheck the Browser compatibility table carefully before using this
             * in production.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
             */
            "menu": DetailedHTMLProps<MenuHTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
            /**
             * The HTML &lt;meta&gt; element represents metadata that cannot be represented by other HTML
             * meta-related elements, like &lt;base&gt;, &lt;link&gt;, &lt;script&gt;, &lt;style&gt; or
             * &lt;title&gt;.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
             */
            "meta": DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            /**
             * The HTML &lt;meter&gt; element represents either a scalar value within a known range or a fractional
             * value.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
             */
            "meter": DetailedHTMLProps<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            /**
             * The HTML &lt;nav&gt; element represents a section of a page whose purpose is to provide navigation
             * links, either within the current document or to other documents. Common examples of navigation
             * sections are menus, tables of contents, and indexes.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
             */
            "nav": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;noscript&gt; element defines a section of HTML to be inserted if a script type on the
             * page is unsupported or if scripting is currently turned off in the browser.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
             */
            "noscript": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;object&gt; element represents an external resource, which can be treated as an image, a
             * nested browsing context, or a resource to be handled by a plugin.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
             */
            "object": DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            /**
             * The HTML &lt;ol&gt; element represents an ordered list of items — typically rendered as a numbered
             * list.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
             */
            "ol": DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            /**
             * The HTML &lt;optgroup&gt; element creates a grouping of options within a &lt;select&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
             */
            "optgroup": DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            /**
             * The HTML &lt;option&gt; element is used to define an item contained in a &lt;select&gt;, an
             * &lt;optgroup&gt;, or a &lt;datalist&gt; element. As such, &lt;option&gt; can represent menu items in
             * popups and other lists of items in an HTML document.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
             */
            "option": DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            /**
             * The HTML Output element (&lt;output&gt;) is a container element into which a site or app can inject
             * the results of a calculation or the outcome of a user action.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
             */
            "output": DetailedHTMLProps<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            /**
             * The HTML &lt;p&gt; element represents a paragraph. Paragraphs are usually represented in visual media
             * as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but
             * HTML paragraphs can be any structural grouping of related content, such as images or form fields.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
             */
            "p": DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            /**
             * The HTML &lt;param&gt; element defines parameters for an &lt;object&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
             */
            "param": DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            /**
             * The HTML &lt;picture&gt; element contains zero or more &lt;source&gt; elements and one &lt;img&gt;
             * element to offer alternative versions of an image for different display/device scenarios. 
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
             */
            "picture": DetailedHTMLProps<HTMLAttributes<HTMLPictureElement>, HTMLPictureElement>;
            /**
             * The HTML &lt;pre&gt; element represents preformatted text which is to be presented exactly as written
             * in the HTML file. The text is typically rendered using a non-proportional ("monospace") font.
             * Whitespace inside this element is displayed as written.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
             */
            "pre": DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            /**
             * The HTML &lt;progress&gt; element displays an indicator showing the completion progress of a task,
             * typically displayed as a progress bar.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
             */
            "progress": DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            /**
             * The HTML &lt;q&gt; element  indicates that the enclosed text is a short inline quotation. Most modern
             * browsers implement this by surrounding the text in quotation marks. This element is intended for
             * short quotations that don't require paragraph breaks; for long quotations use the &lt;blockquote&gt;
             * element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
             */
            "q": DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            /**
             * The HTML Ruby Fallback Parenthesis (&lt;rp&gt;) element is used to provide fall-back parentheses for
             * browsers that do not support display of ruby annotations using the &lt;ruby&gt; element. One
             * &lt;rp&gt; element should enclose each of the opening and closing parentheses that wrap the
             * &lt;rt&gt; element that contains the annotation's text.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
             */
            "rp": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Ruby Text (&lt;rt&gt;) element specifies the ruby text component of a ruby annotation, which
             * is used to provide pronunciation, translation, or transliteration information for East Asian
             * typography. The &lt;rt&gt; element must always be contained within a &lt;ruby&gt; element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
             */
            "rt": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;ruby&gt; element represents a ruby annotation. Ruby annotations are for showing
             * pronunciation of East Asian characters.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
             */
            "ruby": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;s&gt; element renders text with a strikethrough, or a line through it. Use the &lt;s&gt;
             * element to represent things that are no longer relevant or no longer accurate. However, &lt;s&gt; is
             * not appropriate when indicating document edits; for that, use the &lt;del&gt; and &lt;ins&gt;
             * elements, as appropriate.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
             */
            "s": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Sample Element (&lt;samp&gt;) is used to enclose inline text which represents sample (or
             * quoted) output from a computer program. Its contents are typically rendered using the browser's
             * default monospaced font (such as Courier or Lucida Console).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
             */
            "samp": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;script&gt; element is used to embed executable code or data; this is typically used to
             * embed or refer to JavaScript code. The &lt;script&gt; element can also be used with other languages,
             * such as WebGL's GLSL shader programming language and JSON.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
             */
            "script": DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            /**
             * The HTML &lt;section&gt; element represents a standalone section — which doesn't have a more specific
             * semantic element to represent it — contained within an HTML document. Typically, but not always,
             * sections have a heading.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
             */
            "section": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;select&gt; element represents a control that provides a menu of options:
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
             */
            "select": DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            /**
             * The HTML &lt;small&gt; element represents side-comments and small print, like copyright and legal
             * text, independent of its styled presentation. By default, it renders text within it one font-size
             * smaller, such as from small to x-small.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
             */
            "small": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;source&gt; element specifies multiple media resources for the &lt;picture&gt;, the
             * &lt;audio&gt; element, or the &lt;video&gt; element. It is an empty element, meaning that it has no
             * content and does not have a closing tag. It is commonly used to offer the same media content in
             * multiple file formats in order to provide compatibility with a broad range of browsers given their
             * differing support for image file formats and media file formats.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
             */
            "source": DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            /**
             * The HTML &lt;span&gt; element is a generic inline container for phrasing content, which does not
             * inherently represent anything. It can be used to group elements for styling purposes (using the class
             * or id attributes), or because they share attribute values, such as lang. It should be used only when
             * no other semantic element is appropriate. &lt;span&gt; is very much like a &lt;div&gt; element, but
             * &lt;div&gt; is a block-level element whereas a &lt;span&gt; is an inline element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
             */
            "span": DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            /**
             * The HTML Strong Importance Element (&lt;strong&gt;) indicates that its contents have strong
             * importance, seriousness, or urgency. Browsers typically render the contents in bold type.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
             */
            "strong": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;style&gt; element contains style information for a document, or part of a document. It
             * contains CSS, which is applied to the contents of the document containing the &lt;style&gt;
             * element.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
             */
            "style": DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            /**
             * The HTML Subscript element (&lt;sub&gt;) specifies inline text which should be displayed as subscript
             * for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using
             * smaller text.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
             */
            "sub": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Disclosure Summary element (&lt;summary&gt;) element specifies a summary, caption, or legend
             * for a &lt;details&gt; element's disclosure box. Clicking the &lt;summary&gt; element toggles the
             * state of the parent &lt;details&gt; element open and closed.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
             */
            "summary": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Superscript element (&lt;sup&gt;) specifies inline text which is to be displayed as
             * superscript for solely typographical reasons. Superscripts are usually rendered with a raised
             * baseline using smaller text.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
             */
            "sup": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;table&gt; element represents tabular data — that is, information presented in a
             * two-dimensional table comprised of rows and columns of cells containing data.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
             */
            "table": DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            /**
             * The HTML Table Body element (&lt;tbody&gt;) encapsulates a set of table rows (&lt;tr&gt; elements),
             * indicating that they comprise the body of the table (&lt;table&gt;).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
             */
            "tbody": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            /**
             * The HTML &lt;td&gt; element defines a cell of a table that contains data. It participates in the
             * table model.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
             */
            "td": DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            /**
             * The HTML Content Template (&lt;template&gt;) element is a mechanism for holding HTML that is not to
             * be rendered immediately when a page is loaded but may be instantiated subsequently during runtime
             * using JavaScript.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
             */
            "template": DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            /**
             * The HTML &lt;textarea&gt; element represents a multi-line plain-text editing control, useful when you
             * want to allow users to enter a sizeable amount of free-form text, for example a comment on a review
             * or feedback form.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
             */
            "textarea": DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            /**
             * The HTML &lt;tfoot&gt; element defines a set of rows summarizing the columns of the table.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
             */
            "tfoot": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            /**
             * The HTML &lt;th&gt; element defines a cell as header of a group of table cells. The exact nature of
             * this group is defined by the scope and headers attributes.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
             */
            "th": DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            /**
             * The HTML &lt;thead&gt; element defines a set of rows defining the head of the columns of the table.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
             */
            "thead": DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            /**
             * The HTML &lt;time&gt; element represents a specific period in time. It may include the datetime
             * attribute to translate dates into machine-readable format, allowing for better search engine results
             * or custom features such as reminders.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
             */
            "time": DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            /**
             * The HTML Title element (&lt;title&gt;) defines the document's title that is shown in a browser's
             * title bar or a page's tab. It only contains text; tags within the element are ignored.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
             */
            "title": DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            /**
             * The HTML &lt;tr&gt; element defines a row of cells in a table. The row's cells can then be
             * established using a mix of &lt;td&gt; (data cell) and &lt;th&gt; (header cell) elements.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
             */
            "tr": DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            /**
             * The HTML &lt;track&gt; element is used as a child of the media elements &lt;audio&gt; and
             * &lt;video&gt;. It lets you specify timed text tracks (or time-based data), for example to
             * automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video
             * Text Tracks or Timed Text Markup Language (TTML).
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
             */
            "track": DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            /**
             * The HTML Unarticulated Annotation Element (&lt;u&gt;) represents a span of inline text which should
             * be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default
             * as a simple solid underline, but may be altered using CSS.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
             */
            "u": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML &lt;ul&gt; element represents an unordered list of items, typically rendered as a bulleted
             * list.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
             */
            "ul": DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            /**
             * The HTML Variable element (&lt;var&gt;) represents the name of a variable in a mathematical
             * expression or a programming context. It's typically presented using an italicized version of the
             * current typeface, although that behavior is browser-dependent.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
             */
            "var": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            /**
             * The HTML Video element (&lt;video&gt;) embeds a media player which supports video playback into the
             * document. You can use &lt;video&gt; for audio content as well, but the &lt;audio&gt; element may
             * provide a more appropriate user experience.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
             */
            "video": DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            /**
             * The HTML &lt;wbr&gt; element represents a word break opportunity—a position within text where the
             * browser may optionally break a line, though its line-breaking rules would not otherwise create a
             * break at that location.
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
             */
            "wbr": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
        }

        interface DOMAttributes<T> {
            // Clipboard Events
            onCopy?: EventHandler<T, "copy">;
            onCopyCapture?: EventHandler<T, "copy">;
            onCut?: EventHandler<T, "cut">;
            onCutCapture?: EventHandler<T, "cut">;
            onPaste?: EventHandler<T, "paste">;
            onPasteCapture?: EventHandler<T, "paste">;

            // Focus Events
            onFocus?: EventHandler<T, "focus">;
            onFocusCapture?: EventHandler<T, "focus">;
            onBlur?: EventHandler<T, "blur">;
            onBlurCapture?: EventHandler<T, "blur">;

            // Form Events
            onChange?: EventHandler<T, "change">;
            onChangeCapture?: EventHandler<T, "change">;
            onBeforeInput?: EventHandler<T, "input">;
            onBeforeInputCapture?: EventHandler<T, "input">;
            onInput?: EventHandler<T, "input">;
            onInputCapture?: EventHandler<T, "input">;
            onReset?: EventHandler<T, "reset">;
            onResetCapture?: EventHandler<T, "reset">;
            onSubmit?: EventHandler<T, "submit">;
            onSubmitCapture?: EventHandler<T, "submit">;
            onInvalid?: EventHandler<T, "invalid">;
            onInvalidCapture?: EventHandler<T, "invalid">;

            // Image Events
            onLoad?: EventHandler<T, "load">;
            onLoadCapture?: EventHandler<T, "load">;
            onError?: EventHandler<T, "error">; // also a Media Event
            onErrorCapture?: EventHandler<T, "error">; // also a Media Event

            // Keyboard Events
            onKeyDown?: EventHandler<T, "keydown">;
            onKeyDownCapture?: EventHandler<T, "keydown">;
            onKeyPress?: EventHandler<T, "keypress">;
            onKeyPressCapture?: EventHandler<T, "keypress">;
            onKeyUp?: EventHandler<T, "keyup">;
            onKeyUpCapture?: EventHandler<T, "keyup">;

            // Media Events
            onAbort?: EventHandler<T, "abort">;
            onAbortCapture?: EventHandler<T, "abort">;
            onCanPlay?: EventHandler<T, "canplay">;
            onCanPlayCapture?: EventHandler<T, "canplay">;
            onCanPlayThrough?: EventHandler<T, "canplaythrough">;
            onCanPlayThroughCapture?: EventHandler<T, "canplaythrough">;
            onDurationChange?: EventHandler<T, "change">;
            onDurationChangeCapture?: EventHandler<T, "change">;
            onEmptied?: EventHandler<T, "emptied">;
            onEmptiedCapture?: EventHandler<T, "emptied">;
            onEnded?: EventHandler<T, "ended">;
            onEndedCapture?: EventHandler<T, "ended">;
            onLoadedData?: EventHandler<T, "loadeddata">;
            onLoadedDataCapture?: EventHandler<T, "loadeddata">;
            onLoadedMetadata?: EventHandler<T, "loadedmetadata">;
            onLoadedMetadataCapture?: EventHandler<T, "loadedmetadata">;
            onLoadStart?: EventHandler<T, "loadstart">;
            onLoadStartCapture?: EventHandler<T, "loadstart">;
            onPause?: EventHandler<T, "pause">;
            onPauseCapture?: EventHandler<T, "pause">;
            onPlay?: EventHandler<T, "play">;
            onPlayCapture?: EventHandler<T, "play">;
            onPlaying?: EventHandler<T, "playing">;
            onPlayingCapture?: EventHandler<T, "playing">;
            onProgress?: EventHandler<T, "progress">;
            onProgressCapture?: EventHandler<T, "progress">;
            onRateChange?: EventHandler<T, "ratechange">;
            onRateChangeCapture?: EventHandler<T, "ratechange">;
            onSeeked?: EventHandler<T, "seeked">;
            onSeekedCapture?: EventHandler<T, "seeked">;
            onSeeking?: EventHandler<T, "seeking">;
            onSeekingCapture?: EventHandler<T, "seeking">;
            onStalled?: EventHandler<T, "stalled">;
            onStalledCapture?: EventHandler<T, "stalled">;
            onSuspend?: EventHandler<T, "suspend">;
            onSuspendCapture?: EventHandler<T, "suspend">;
            onTimeUpdate?: EventHandler<T, "timeupdate">;
            onTimeUpdateCapture?: EventHandler<T, "timeupdate">;
            onVolumeChange?: EventHandler<T, "volumechange">;
            onVolumeChangeCapture?: EventHandler<T, "volumechange">;
            onWaiting?: EventHandler<T, "waiting">;
            onWaitingCapture?: EventHandler<T, "waiting">;

            // MouseEvents
            onAuxClick?: EventHandler<T, "auxclick">;
            onAuxClickCapture?: EventHandler<T, "auxclick">;
            onClick?: EventHandler<T, "click">;
            onClickCapture?: EventHandler<T, "click">;
            onContextMenu?: EventHandler<T, "contextmenu">;
            onContextMenuCapture?: EventHandler<T, "contextmenu">;
            onDoubleClick?: EventHandler<T, "dblclick">;
            onDoubleClickCapture?: EventHandler<T, "dblclick">;
            onDrag?: EventHandler<T, "drag">;
            onDragCapture?: EventHandler<T, "drag">;
            onDragEnd?: EventHandler<T, "dragend">;
            onDragEndCapture?: EventHandler<T, "dragend">;
            onDragEnter?: EventHandler<T, "dragenter">;
            onDragEnterCapture?: EventHandler<T, "dragenter">;
            onDragLeave?: EventHandler<T, "dragleave">;
            onDragLeaveCapture?: EventHandler<T, "dragleave">;
            onDragOver?: EventHandler<T, "dragover">;
            onDragOverCapture?: EventHandler<T, "dragover">;
            onDragStart?: EventHandler<T, "dragstart">;
            onDragStartCapture?: EventHandler<T, "dragstart">;
            onDrop?: EventHandler<T, "drop">;
            onDropCapture?: EventHandler<T, "drop">;
            onMouseDown?: EventHandler<T, "mousedown">;
            onMouseDownCapture?: EventHandler<T, "mousedown">;
            onMouseEnter?: EventHandler<T, "mouseenter">;
            onMouseLeave?: EventHandler<T, "mouseleave">;
            onMouseMove?: EventHandler<T, "mousemove">;
            onMouseMoveCapture?: EventHandler<T, "mousemove">;
            onMouseOut?: EventHandler<T, "mouseout">;
            onMouseOutCapture?: EventHandler<T, "mouseout">;
            onMouseOver?: EventHandler<T, "mouseover">;
            onMouseOverCapture?: EventHandler<T, "mouseover">;
            onMouseUp?: EventHandler<T, "mouseup">;
            onMouseUpCapture?: EventHandler<T, "mouseup">;

            // Selection Events
            onSelect?: EventHandler<T, "select">;
            onSelectCapture?: EventHandler<T, "select">;

            // Touch Events
            onTouchCancel?: EventHandler<T, "touchcancel">;
            onTouchCancelCapture?: EventHandler<T, "touchcancel">;
            onTouchEnd?: EventHandler<T, "touchend">;
            onTouchEndCapture?: EventHandler<T, "touchend">;
            onTouchMove?: EventHandler<T, "touchmove">;
            onTouchMoveCapture?: EventHandler<T, "touchmove">;
            onTouchStart?: EventHandler<T, "touchstart">;
            onTouchStartCapture?: EventHandler<T, "touchstart">;

            // Pointer Events
            onPointerDown?: EventHandler<T, "pointerdown">;
            onPointerDownCapture?: EventHandler<T, "pointerdown">;
            onPointerMove?: EventHandler<T, "pointermove">;
            onPointerMoveCapture?: EventHandler<T, "pointermove">;
            onPointerUp?: EventHandler<T, "pointerup">;
            onPointerUpCapture?: EventHandler<T, "pointerup">;
            onPointerCancel?: EventHandler<T, "pointercancel">;
            onPointerCancelCapture?: EventHandler<T, "pointercancel">;
            onPointerEnter?: EventHandler<T, "pointerenter">;
            onPointerEnterCapture?: EventHandler<T, "pointerenter">;
            onPointerLeave?: EventHandler<T, "pointerleave">;
            onPointerLeaveCapture?: EventHandler<T, "pointerleave">;
            onPointerOver?: EventHandler<T, "pointerover">;
            onPointerOverCapture?: EventHandler<T, "pointerover">;
            onPointerOut?: EventHandler<T, "pointerout">;
            onPointerOutCapture?: EventHandler<T, "pointerout">;
            onGotPointerCapture?: EventHandler<T, "gotpointercapture">;
            onGotPointerCaptureCapture?: EventHandler<T, "gotpointercapture">;
            onLostPointerCapture?: EventHandler<T, "lostpointercapture">;
            onLostPointerCaptureCapture?: EventHandler<T, "lostpointercapture">;

            // UI Events
            onScroll?: EventHandler<T, "scroll">;
            onScrollCapture?: EventHandler<T, "scroll">;

            // Wheel Events
            onWheel?: EventHandler<T, "wheel">;
            onWheelCapture?: EventHandler<T, "wheel">;

            // Animation Events
            onAnimationStart?: EventHandler<T, "animationstart">;
            onAnimationStartCapture?: EventHandler<T, "animationstart">;
            onAnimationEnd?: EventHandler<T, "animationend">;
            onAnimationEndCapture?: EventHandler<T, "animationend">;
            onAnimationIteration?: EventHandler<T, "animationiteration">;
            onAnimationIterationCapture?: EventHandler<T, "animationiteration">;

            // Transition Events
            onTransitionEnd?: EventHandler<T, "transitionend">;
            onTransitionEndCapture?: EventHandler<T, "transitionend">;
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
            className?: string,
            contentEditable?: Booleanish | "inherit";
            contextMenu?: string;
            dir?: LiteralUnion<"ltr" | "rtl" | "auto">;
            draggable?: Booleanish;
            hidden?: boolean;
            id?: string;
            lang?: LangCodeBCP47;
            placeholder?: string;
            slot?: string;
            spellCheck?: Booleanish;
            style?: CSSProperties | string;
            tabIndex?: number;
            title?: string;
            translate?: "yes" | "no";

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
            autoCapitalize?: LiteralUnion<"off" | "none" | "on" | "sentences" | "words" | "characters">;
            autoCorrect?: LiteralUnion<"off" | "on">;
            autoSave?: string;
            color?: string;
            itemProp?: string;
            itemScope?: boolean;
            itemType?: string;
            itemID?: string;
            itemRef?: string;
            results?: number;
            security?: string;

            // Living Standard
            /**
             * Hints at the type of data that might be entered by the user while editing the element or its contents
             * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
             */
            inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
            /**
             * Specify that a standard HTML element should behave like a defined custom built-in element
             * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
             */
            is?: string;

            /**
             * data-* attributes allow us to store extra information on standard, semantic HTML elements without other 
             * hacks such as non-standard attributes, extra properties on DOM.
             */
            dataset?: { [key: string]: string }
        }

        interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
            download?: boolean | string;
            href?: string;
            hrefLang?: LangCodeBCP47;
            media?: string;
            ping?: string;
            rel?: string;
            target?: AttrTarget;
            type?: string;
            referrerPolicy?: string;
        }

        interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> { }

        interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
            alt?: string;
            coords?: string;
            download?: boolean | string;
            href?: string;
            hrefLang?: LangCodeBCP47;
            media?: string;
            rel?: string;
            shape?: LiteralUnion<"circle" | "rect" | "poly" | "default">;
            target?: AttrTarget;
        }

        interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
            href?: string;
            target?: AttrTarget;
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
            type?: "submit" | "reset" | "button";
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
            autoComplete?: LiteralUnion<"off" | "on">;
            encType?: LiteralUnion<"application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain">;
            method?: LiteralUnion<"post" | "get" | "dialog">;
            name?: string;
            noValidate?: boolean;
            target?: AttrTarget;
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
            autoComplete?: LiteralUnion<"off" | "on">;
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
            /**
             * A string specifying the type of control to render. For example, to create a checkbox, a value of 
             * checkbox is used. If omitted (or an unknown value is specified), the input type text is used, 
             * creating a plaintext input field.
             */
            type?: LiteralUnion<"button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" |
                "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" |
                "submit" | "tel" | "text" | "time" | "url" | "week" | "datetime">;
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
            for?: string;
        }

        interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
            value?: string | string[] | number;
        }

        interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
            as?: string;
            crossOrigin?: string;
            href?: string;
            hrefLang?: LangCodeBCP47;
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
            type?: "1" | "a" | "A" | "i" | "I";
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
            for?: string;
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
            autoComplete?: LiteralUnion<"off" | "on">;
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
            autoComplete?: LiteralUnion<"off" | "on">;
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
            srcLang?: LangCodeBCP47;
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
            "aria-activedescendant"?: string;
            /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
            "aria-atomic"?: boolean | "false" | "true";
            /**
             * Indicates whether inputting text could trigger display of one or more predictions of the user"s intended value for an input and specifies how predictions would be
             * presented if they are made.
             */
            "aria-autocomplete"?: "none" | "inline" | "list" | "both";
            /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
            "aria-busy"?: boolean | "false" | "true";
            /**
             * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
             * @see aria-pressed @see aria-selected.
             */
            "aria-checked"?: boolean | "false" | "mixed" | "true";
            /**
             * Defines the total number of columns in a table, grid, or treegrid.
             * @see aria-colindex.
             */
            "aria-colcount"?: number;
            /**
             * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
             * @see aria-colcount @see aria-colspan.
             */
            "aria-colindex"?: number;
            /**
             * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-colindex @see aria-rowspan.
             */
            "aria-colspan"?: number;
            /**
             * Identifies the element (or elements) whose contents or presence are controlled by the current element.
             * @see aria-owns.
             */
            "aria-controls"?: string;
            /** Indicates the element that represents the current item within a container or set of related elements. */
            "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time";
            /**
             * Identifies the element (or elements) that describes the object.
             * @see aria-labelledby
             */
            "aria-describedby"?: string;
            /**
             * Identifies the element that provides a detailed, extended description for the object.
             * @see aria-describedby.
             */
            "aria-details"?: string;
            /**
             * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
             * @see aria-hidden @see aria-readonly.
             */
            "aria-disabled"?: boolean | "false" | "true";
            /**
             * Indicates what functions can be performed when a dragged object is released on the drop target.
             * @deprecated in ARIA 1.1
             */
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
            /**
             * Identifies the element that provides an error message for the object.
             * @see aria-invalid @see aria-describedby.
             */
            "aria-errormessage"?: string;
            /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
            "aria-expanded"?: boolean | "false" | "true";
            /**
             * Identifies the next element (or elements) in an alternate reading order of content which, at the user"s discretion,
             * allows assistive technology to override the general default of reading in document source order.
             */
            "aria-flowto"?: string;
            /**
             * Indicates an element's "grabbed" state in a drag-and-drop operation.
             * @deprecated in ARIA 1.1
             */
            "aria-grabbed"?: boolean | "false" | "true";
            /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
            "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
            /**
             * Indicates whether the element is exposed to an accessibility API.
             * @see aria-disabled.
             */
            "aria-hidden"?: boolean | "false" | "true";
            /**
             * Indicates the entered value does not conform to the format expected by the application.
             * @see aria-errormessage.
             */
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
            /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
            "aria-keyshortcuts"?: string;
            /**
             * Defines a string value that labels the current element.
             * @see aria-labelledby.
             */
            "aria-label"?: string;
            /**
             * Identifies the element (or elements) that labels the current element.
             * @see aria-describedby.
             */
            "aria-labelledby"?: string;
            /** Defines the hierarchical level of an element within a structure. */
            "aria-level"?: number;
            /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
            "aria-live"?: "off" | "assertive" | "polite";
            /** Indicates whether an element is modal when displayed. */
            "aria-modal"?: boolean | "false" | "true";
            /** Indicates whether a text box accepts multiple lines of input or only a single line. */
            "aria-multiline"?: boolean | "false" | "true";
            /** Indicates that the user may select more than one item from the current selectable descendants. */
            "aria-multiselectable"?: boolean | "false" | "true";
            /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
            "aria-orientation"?: "horizontal" | "vertical";
            /**
             * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
             * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
             * @see aria-controls.
             */
            "aria-owns"?: string;
            /**
             * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
             * A hint could be a sample value or a brief description of the expected format.
             */
            "aria-placeholder"?: string;
            /**
             * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-setsize.
             */
            "aria-posinset"?: number;
            /**
             * Indicates the current "pressed" state of toggle buttons.
             * @see aria-checked @see aria-selected.
             */
            "aria-pressed"?: boolean | "false" | "mixed" | "true";
            /**
             * Indicates that the element is not editable, but is otherwise operable.
             * @see aria-disabled.
             */
            "aria-readonly"?: boolean | "false" | "true";
            /**
             * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
             * @see aria-atomic.
             */
            "aria-relevant"?: "additions" | "additions text" | "all" | "removals" | "text";
            /** Indicates that user input is required on the element before a form may be submitted. */
            "aria-required"?: boolean | "false" | "true";
            /** Defines a human-readable, author-localized description for the role of an element. */
            "aria-roledescription"?: string;
            /**
             * Defines the total number of rows in a table, grid, or treegrid.
             * @see aria-rowindex.
             */
            "aria-rowcount"?: number;
            /**
             * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
             * @see aria-rowcount @see aria-rowspan.
             */
            "aria-rowindex"?: number;
            /**
             * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-rowindex @see aria-colspan.
             */
            "aria-rowspan"?: number;
            /**
             * Indicates the current "selected" state of various widgets.
             * @see aria-checked @see aria-pressed.
             */
            "aria-selected"?: boolean | "false" | "true";
            /**
             * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-posinset.
             */
            "aria-setsize"?: number;
            /** Indicates if items in a table or grid are sorted in ascending or descending order. */
            "aria-sort"?: "none" | "ascending" | "descending" | "other";
            /** Defines the maximum allowed value for a range widget. */
            "aria-valuemax"?: number;
            /** Defines the minimum allowed value for a range widget. */
            "aria-valuemin"?: number;
            /**
             * Defines the current value for a range widget.
             * @see aria-valuetext.
             */
            "aria-valuenow"?: number;
            /** Defines the human readable text alternative of aria-valuenow for a range widget. */
            "aria-valuetext"?: string;
        }
    }
}


