/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../N/search.d.ts" />

interface RedirectOptions {
    url: string;
    parameters?: Object;
}

interface ToRecordOptions {
    id: string;
    type: string;
    isEditMode?: boolean;
    parameters?: Object;
}

interface ToSavedSearchOptions {
    id: number;
}

interface ToSearchOptions {
    search: Search;
}

interface ToSuiteletOptions {
    scriptId: string;
    deploymentId: string;
    isExternal?: boolean;
    parameters?: Object;
}

interface ToTaskLinkOptions {
    id: string;
    parameters?: Object;
}

interface RedirectModule {
    redirect(options: RedirectOptions): void;
    toRecord(options: ToRecordOptions): void;
    toSavedSearch(options: ToSavedSearchOptions): void;
    toSavedSearchResult(options: ToSavedSearchOptions): void;
    toSearch(options: ToSearchOptions): void;
    toSearchResult(options: ToSearchOptions): void;
    toSuitelet(options: ToSuiteletOptions): void;
    toTaskLink(options: ToTaskLinkOptions): void;
}

declare module N {
    var redirect: RedirectModule;
}

declare module 'N/render' {
    export = N.redirect;
}
