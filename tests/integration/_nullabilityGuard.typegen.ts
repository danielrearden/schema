/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import { GraphQLResolveInfo } from "graphql";
import { core } from "../..";

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenRootTypes {
  Query: {};
  User: { id: string };
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {}

export interface NexusGenFieldTypes {
  Query: {
    // field return type
    getUser: NexusGenRootTypes["User"]; // User!
    getUserWithGuard: NexusGenRootTypes["User"]; // User!
  };
  User: {
    // field return type
    id: string; // ID!
    usersList: NexusGenRootTypes["User"][]; // [User!]!
  };
}

export interface NexusGenArgTypes {}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
    /**
     * When there's a null value for this type, we should recover by supplying this value instead.
     * This can be added to any object type
     */
    nullGuardFallback?: (
      args: any,
      ctx: NexusGenTypes["context"],
      info: GraphQLResolveInfo
    ) => core.GetGen2<"rootTypes", TypeName>;
  }
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {
    /**
     * The nullability guard can be helpful, but is also a pottentially expensive operation for lists.
     * We need to iterate the entire list to check for null items to guard against. Set this to true
     * to skip the null guard on a specific field if you know there's no potential for unsafe types.
     */
    skipNullGuard?: boolean;
  }
  interface NexusGenPluginSchemaConfig {
    /**
     * When there's a null value for any, we can recover by supplying this value instead.
     * This can be added at the schema, to define global guards.
     */
    nullGuardFallback?: <TypeName extends string>(
      typeName: TypeName,
      args: any,
      ctx: NexusGenTypes["context"],
      info: GraphQLResolveInfo
    ) => core.GetGen2<"rootTypes", TypeName>;
  }
}