import { Mate } from './MateModel';
type SupportType = {
    text: string;
    url: string;
};
export interface ApiResponseModel {
    data: Mate[];
    page: number;
    per_page: number;
    support: SupportType;
    total: number;
    total_pages: number;
}
