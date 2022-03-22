import { Injectable } from "@nestjs/common";
import { ServiceA } from "./service-a";

export class ServiceB {
    constructor(private readonly serviceA: ServiceA){}
    
    getHello(): string {
        return this.serviceA.getHello()
    }
}