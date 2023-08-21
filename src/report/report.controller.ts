import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { CommonForbiddenErrorDto } from 'src/common/dto';
import { ReportService } from './report.service';
import { ReportResponseDto } from './dto';
import { format, parse } from 'date-fns';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @ApiOkResponse({
    description: '200',
    type: [ReportResponseDto],
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getProductsByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<ReportResponseDto> {
    const parsedStartDate = parse(startDate, 'yyyy-MM-dd', new Date());
    const formattedStartDate = format(
      parsedStartDate,
      'yyyy-MM-dd HH:mm:ss.SSSSSSSSS',
    );

    const parsedEndDate = parse(endDate, 'yyyy-MM-dd', new Date());
    const formattedEndDate = format(
      parsedEndDate,
      'yyyy-MM-dd HH:mm:ss.SSSSSSSSS',
    );

    const data = await this.reportService.getProductsByDateRange({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });

    return {
      data,
    };
  }
}
