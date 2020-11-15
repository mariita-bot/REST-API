import { Controller, Get, Header, Put , HttpStatus, Res, Req, Post, HttpCode } from '@nestjs/common';
import { Response, Request } from 'express';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

@Controller("api/reportes")
export class ReporteController { 
  
    constructor(){}
    
    @Get('pdf')
    @HttpCode(200)
    @Header('Content-Type','application/pdf')
    test(@Req() req: Request, @Res() res: Response){
        //crear un documento 
        const doc = new PDFDocument();
    
        doc
        .font(__dirname.concat('/fonts/arial.ttf'))
        .fontSize(25)
        .text('Some text with an embedded font!', 100, 100);

        doc.end();

        doc.pipe(res);
    }
}