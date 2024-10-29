// CRUD/controllers/pdfGenerate.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';

const prisma = new PrismaClient();

export class pdfGenerate {
  async generatePDF(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();

      const doc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=UserReport.pdf');

      // Adiciona conteúdo ao PDF
      doc.fontSize(20).text('Relatório de Usuários', { align: 'center' });
      doc.moveDown();
      users.forEach(user => {
        doc.fontSize(12).text(`ID: ${user.id}, Nome: ${user.name}, Email: ${user.email}`);
        doc.moveDown();
      });


      doc.pipe(res);
      doc.end();
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      res.status(500).json({ error: 'Erro ao gerar o relatório' });
    }
  }
}
