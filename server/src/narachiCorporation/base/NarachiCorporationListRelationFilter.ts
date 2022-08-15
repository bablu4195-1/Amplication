/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NarachiCorporationWhereInput } from "./NarachiCorporationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NarachiCorporationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NarachiCorporationWhereInput,
  })
  @ValidateNested()
  @Type(() => NarachiCorporationWhereInput)
  @IsOptional()
  @Field(() => NarachiCorporationWhereInput, {
    nullable: true,
  })
  every?: NarachiCorporationWhereInput;

  @ApiProperty({
    required: false,
    type: () => NarachiCorporationWhereInput,
  })
  @ValidateNested()
  @Type(() => NarachiCorporationWhereInput)
  @IsOptional()
  @Field(() => NarachiCorporationWhereInput, {
    nullable: true,
  })
  some?: NarachiCorporationWhereInput;

  @ApiProperty({
    required: false,
    type: () => NarachiCorporationWhereInput,
  })
  @ValidateNested()
  @Type(() => NarachiCorporationWhereInput)
  @IsOptional()
  @Field(() => NarachiCorporationWhereInput, {
    nullable: true,
  })
  none?: NarachiCorporationWhereInput;
}
export { NarachiCorporationListRelationFilter };
