
interface ResponseDtoParams {
    success: boolean,
    message?: string,
    data?: any
}

export class ResponseDto {
    success: boolean;
    message: string;
    data: any;

    constructor(params: ResponseDtoParams) {
        this.success = params.success;
        this.message = params.message;
        this.data = params.data;
    }
}