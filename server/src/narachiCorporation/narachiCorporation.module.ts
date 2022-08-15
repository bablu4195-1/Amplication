import { Module } from "@nestjs/common";
import { NarachiCorporationModuleBase } from "./base/narachiCorporation.module.base";
import { NarachiCorporationService } from "./narachiCorporation.service";
import { NarachiCorporationController } from "./narachiCorporation.controller";
import { NarachiCorporationResolver } from "./narachiCorporation.resolver";

@Module({
  imports: [NarachiCorporationModuleBase],
  controllers: [NarachiCorporationController],
  providers: [NarachiCorporationService, NarachiCorporationResolver],
  exports: [NarachiCorporationService],
})
export class NarachiCorporationModule {}
