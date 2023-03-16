import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQuearyDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
