import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CommonForbiddenErrorDto } from '../common/dto';
import { ReportService } from './report.service';
import { ReportResponseDto } from './dto';
import { format, parse } from 'date-fns';
import { Role } from '../common/decorators/role.decorator';
import { RoleGuard } from '../common/guards/role.guard';

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
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @ApiBearerAuth()
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
