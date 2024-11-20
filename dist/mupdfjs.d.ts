import * as mupdf from "./mupdf";
export declare const Rect: {
    MIN_INF_RECT: number;
    MAX_INF_RECT: number;
    isEmpty: (rect: [number, number, number, number]) => boolean;
    isValid: (rect: [number, number, number, number]) => boolean;
    isInfinite: (rect: [number, number, number, number]) => boolean;
    transform: (rect: [number, number, number, number], matrix: [number, number, number, number, number, number]) => [number, number, number, number];
};
export declare const Matrix: {
    identity: [number, number, number, number, number, number];
    scale(sx: number, sy: number): [number, number, number, number, number, number];
    translate(tx: number, ty: number): [number, number, number, number, number, number];
    rotate(d: number): [number, number, number, number, number, number];
    invert(m: [number, number, number, number, number, number]): [number, number, number, number, number, number];
    concat(one: [number, number, number, number, number, number], two: [number, number, number, number, number, number]): [number, number, number, number, number, number];
};
export type Matrix = [number, number, number, number, number, number];
export type Rect = [number, number, number, number];
export type Point = [number, number];
export type Quad = [number, number, number, number, number, number, number, number];
export type Color = [number] | [number, number, number] | [number, number, number, number];
export declare class Buffer extends mupdf.Buffer {
}
export declare class ColorSpace extends mupdf.ColorSpace {
}
export declare class Device extends mupdf.Device {
}
export declare class DocumentWriter extends mupdf.DocumentWriter {
}
export declare class DrawDevice extends mupdf.DrawDevice {
}
export declare class DisplayList extends mupdf.DisplayList {
}
export declare class DisplayListDevice extends mupdf.DisplayListDevice {
}
export declare class Font extends mupdf.Font {
}
export declare class Image extends mupdf.Image {
}
export declare class Link extends mupdf.Link {
}
export declare class OutlineIterator extends mupdf.OutlineIterator {
}
export declare class Path extends mupdf.Path {
}
export declare class PDFAnnotation extends mupdf.PDFAnnotation {
}
export declare class PDFGraftMap extends mupdf.PDFGraftMap {
}
export declare class PDFObject extends mupdf.PDFObject {
}
export declare class PDFWidget extends mupdf.PDFWidget {
}
export declare class Pixmap extends mupdf.Pixmap {
}
export declare class StrokeState extends mupdf.StrokeState {
}
export declare class StructuredText extends mupdf.StructuredText {
}
export declare class Text extends mupdf.Text {
}
export type CreatableAnnotationType = "Text" | "FreeText" | "Line" | "Square" | "Circle" | "Polygon" | "PolyLine" | "Highlight" | "Underline" | "Squiggly" | "StrikeOut" | "Redact" | "Stamp" | "Caret" | "Ink" | "FileAttachment";
export declare class PDFDocument extends mupdf.PDFDocument {
    static createBlankDocument(width?: number, height?: number): PDFDocument;
    static openDocument(from: mupdf.Buffer | ArrayBuffer | Uint8Array | mupdf.Stream, magic: string): PDFDocument;
    copyPage(pno: number, to?: number): void;
    newPage(pno?: number, width?: number, height?: number): mupdf.PDFPage;
    deletePages(...args: any[]): void;
    getPageLabels(): PageLabelRule[];
    setPageLabelsArray(labels: PageLabelRule[]): void;
    authenticate(password: string): number;
    getPageNumbers(label: string, onlyOne?: boolean): number[];
    private getPageLabel;
    private toRoman;
    private toAlpha;
    merge(sourcePDF: mupdf.PDFDocument, fromPage?: number, toPage?: number, startAt?: number, rotate?: 0 | 90 | 180 | 270, copyLinks?: boolean, copyAnnotations?: boolean): void;
    private copyPageLinks;
    private copyPageAnnotations;
    split(range: number[] | undefined): PDFDocument[];
    scrub(options: {
        attachedFiles?: boolean;
        cleanPages?: boolean;
        embeddedFiles?: boolean;
        hiddenText?: boolean;
        javascript?: boolean;
        metadata?: boolean;
        redactions?: boolean;
        redactImages?: number;
        removeLinks?: boolean;
        resetFields?: boolean;
        resetResponses?: boolean;
        thumbnails?: boolean;
        xmlMetadata?: boolean;
    }): void;
    attachFile(name: string, data: Buffer | ArrayBuffer | Uint8Array, options?: {
        filename?: string;
        creationDate?: Date;
        modificationDate?: Date;
    }): void;
    private guessMimeType;
}
export declare class PDFPage extends mupdf.PDFPage {
    constructor(doc: mupdf.PDFDocument, pno: number);
    insertText(value: string, point: Point, fontName?: string, fontSize?: number, graphics?: {
        strokeColor: Color;
        fillColor: Color;
        strokeThickness: number;
    }): void;
    insertImage(data: {
        image: Image;
        name: string;
    }, metrics?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }): void;
    insertLink(metrics: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, uri: string): void;
    rotate(r: number): void;
    addAnnotation(type: CreatableAnnotationType, metrics: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, author?: string, contents?: string): PDFAnnotation;
    addRedaction(metrics: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): PDFAnnotation;
    applyRedactions(blackBoxes?: boolean | number, imageMethod?: number): void;
    search(needle: string, maxHits?: number): Quad[][];
    setCropBox(rect: Rect): void;
    setArtBox(rect: Rect): void;
    setBleedBox(rect: Rect): void;
    setTrimBox(rect: Rect): void;
    setMediaBox(rect: Rect): void;
    getText(): string;
    getImages(): {
        bbox: Rect;
        matrix: Matrix;
        image: Image;
    }[];
    delete(ref: PDFAnnotation | PDFWidget | Link | string): void;
    getResourcesXrefObjects(): {
        key: string | number;
        value: string;
    }[];
}
interface PageLabelRule {
    startpage: number;
    prefix?: string;
    style?: string;
    firstpagenum?: number;
}
export {};
