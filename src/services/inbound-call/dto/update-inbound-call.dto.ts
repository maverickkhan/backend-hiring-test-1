import { PartialType } from '@nestjs/mapped-types';
import { CreateInboundCallDto } from './create-inbound-call.dto';

export class UpdateInboundCallDto extends PartialType(CreateInboundCallDto) {}
