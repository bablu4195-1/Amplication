import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NarachiCorporationResolverBase } from "./base/narachiCorporation.resolver.base";
import { NarachiCorporation } from "./base/NarachiCorporation";
import { NarachiCorporationService } from "./narachiCorporation.service";

@graphql.Resolver(() => NarachiCorporation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NarachiCorporationResolver extends NarachiCorporationResolverBase {
  constructor(
    protected readonly service: NarachiCorporationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
