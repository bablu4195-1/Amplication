import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NarachiCorporationServiceBase } from "./base/narachiCorporation.service.base";

@Injectable()
export class NarachiCorporationService extends NarachiCorporationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
