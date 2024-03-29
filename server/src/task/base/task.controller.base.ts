/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TaskService } from "../task.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TaskCreateInput } from "./TaskCreateInput";
import { TaskWhereInput } from "./TaskWhereInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskUpdateInput } from "./TaskUpdateInput";
import { Task } from "./Task";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TaskControllerBase {
  constructor(
    protected readonly service: TaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Task })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TaskCreateInput): Promise<Task> {
    return await this.service.create({
      data: data,
      select: {
        assignedTo: true,
        createdAt: true,
        estimation: true,
        id: true,
        project: true,
        startDate: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Task] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TaskFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Task[]> {
    const args = plainToClass(TaskFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        assignedTo: true,
        createdAt: true,
        estimation: true,
        id: true,
        project: true,
        startDate: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        assignedTo: true,
        createdAt: true,
        estimation: true,
        id: true,
        project: true,
        startDate: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() data: TaskUpdateInput
  ): Promise<Task | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          assignedTo: true,
          createdAt: true,
          estimation: true,
          id: true,
          project: true,
          startDate: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          assignedTo: true,
          createdAt: true,
          estimation: true,
          id: true,
          project: true,
          startDate: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
