/**
 * 
 *  Flow constraint code used by Vue source code
 *  Here you declare types in TypeScript
 * 
 */
 declare type CompilerOptions = {
    warn?: Function; // allow customizing warning in different environments; e.g. node
    modules?: Array<ModuleOptions>; // platform specific modules; e.g. style; class
    directives?: { [key: string]: Function }; // platform specific directives
    staticKeys?: string; // a list of AST properties to be considered static; for optimization
    isUnaryTag?: (tag: string) => boolean | null; // check if a tag is unary for the platform
    canBeLeftOpenTag?: (tag: string) => boolean | null; // check if a tag can be left opened
    isReservedTag?: (tag: string) => boolean | null; // check if a tag is a native for the platform
    preserveWhitespace?: boolean; // preserve whitespace between elements? (Deprecated)
    whitespace?: 'preserve' | 'condense'; // whitespace handling strategy
    optimize?: boolean; // optimize static content?
  
    // web specific
    mustUseProp?: (tag: string, type: string, name: string) => boolean; // check if an attribute should be bound as a property
    isPreTag?: (attr: string) => boolean | null; // check if a tag needs to preserve whitespace
    getTagNamespace?: (tag: string) => string | null; // check the namespace for a tag
    expectHTML?: boolean; // only false for non-web builds
    isFromDOM?: boolean;
    shouldDecodeTags?: boolean;
    shouldDecodeNewlines?:  boolean;
    shouldDecodeNewlinesForHref?: boolean;
    outputSourceRange?: boolean;
  
    // runtime user-configurable
    delimiters?: [string, string]; // template delimiters
    comments?: boolean; // preserve comments in template
  
    // for ssr optimization compiler
    scopeId?: string;
  };