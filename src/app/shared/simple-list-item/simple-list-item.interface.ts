export interface ISimpleListItem {
    index: number;
    title: string;
    linkTo: null | 'url' | 'routerLink';
    link?: string | undefined;
    content: string;
}
