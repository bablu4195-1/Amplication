/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateNarachiCorporationArgs } from "./CreateNarachiCorporationArgs";
import { UpdateNarachiCorporationArgs } from "./UpdateNarachiCorporationArgs";
import { DeleteNarachiCorporationArgs } from "./DeleteNarachiCorporationArgs";
import { NarachiCorporationFindManyArgs } from "./NarachiCorporationFindManyArgs";
import { NarachiCorporationFindUniqueArgs } from "./NarachiCorporationFindUniqueArgs";
import { NarachiCorporation } from "./NarachiCorporation";
import { NarachiCorporationService } from "../narachiCorporation.service";

@graphql.Resolver(() => NarachiCorporation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NarachiCorporationResolverBase {
  constructor(
    protected readonly service: NarachiCorporationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "read",
    possession: "any",
  })
  async _narachiCorporationsMeta(
    @graphql.Args() args: NarachiCorporationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NarachiCorporation])
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "read",
    possession: "any",
  })
  async narachiCorporations(
    @graphql.Args() args: NarachiCorporationFindManyArgs
  ): Promise<NarachiCorporation[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NarachiCorporation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "read",
    possession: "own",
  })
  async narachiCorporation(
    @graphql.Args() args: NarachiCorporationFindUniqueArgs
  ): Promise<NarachiCorporation | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NarachiCorporation)
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "create",
    possession: "any",
  })
  async createNarachiCorporation(
    @graphql.Args() args: CreateNarachiCorporationArgs
  ): Promise<NarachiCorporation> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NarachiCorporation)
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "update",
    possession: "any",
  })
  async updateNarachiCorporation(
    @graphql.Args() args: UpdateNarachiCorporationArgs
  ): Promise<NarachiCorporation | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NarachiCorporation)
  @nestAccessControl.UseRoles({
    resource: "NarachiCorporation",
    action: "delete",
    possession: "any",
  })
  async deleteNarachiCorporation(
    @graphql.Args() args: DeleteNarachiCorporationArgs
  ): Promise<NarachiCorporation | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
