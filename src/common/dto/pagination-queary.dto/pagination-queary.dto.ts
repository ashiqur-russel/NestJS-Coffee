import { IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQuearyDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  offset: number;
}
