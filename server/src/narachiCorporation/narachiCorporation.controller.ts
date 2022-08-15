import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NarachiCorporationService } from "./narachiCorporation.service";
import { NarachiCorporationControllerBase } from "./base/narachiCorporation.controller.base";

@swagger.ApiTags("narachiCorporations")
@common.Controller("narachiCorporations")
export class NarachiCorporationController extends NarachiCorporationControllerBase {
  constructor(
    protected readonly service: NarachiCorporationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
