
interface ResponseDtoParams {
    success: boolean,
    message?: string,
    data?: any
}

export class ResponseDto {
    constructor(
        private readonly params: ResponseDtoParams
    ) { }
}