// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LoanStarted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanStarted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LoanStarted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LoanStarted", id.toString(), this);
    }
  }

  static load(id: string): LoanStarted | null {
    return changetype<LoanStarted | null>(store.get("LoanStarted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get collateralId(): BigInt {
    let value = this.get("collateralId");
    return value!.toBigInt();
  }

  set collateralId(value: BigInt) {
    this.set("collateralId", Value.fromBigInt(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value!.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get borrower(): Bytes {
    let value = this.get("borrower");
    return value!.toBytes();
  }

  set borrower(value: Bytes) {
    this.set("borrower", Value.fromBytes(value));
  }

  get principal(): BigInt {
    let value = this.get("principal");
    return value!.toBigInt();
  }

  set principal(value: BigInt) {
    this.set("principal", Value.fromBigInt(value));
  }

  get maxRepayment(): BigInt {
    let value = this.get("maxRepayment");
    return value!.toBigInt();
  }

  set maxRepayment(value: BigInt) {
    this.set("maxRepayment", Value.fromBigInt(value));
  }

  get loanDuration(): BigInt {
    let value = this.get("loanDuration");
    return value!.toBigInt();
  }

  set loanDuration(value: BigInt) {
    this.set("loanDuration", Value.fromBigInt(value));
  }

  get loanInterestRate(): i32 {
    let value = this.get("loanInterestRate");
    return value!.toI32();
  }

  set loanInterestRate(value: i32) {
    this.set("loanInterestRate", Value.fromI32(value));
  }

  get adminFee(): i32 {
    let value = this.get("adminFee");
    return value!.toI32();
  }

  set adminFee(value: i32) {
    this.set("adminFee", Value.fromI32(value));
  }

  get loanStart(): BigInt {
    let value = this.get("loanStart");
    return value!.toBigInt();
  }

  set loanStart(value: BigInt) {
    this.set("loanStart", Value.fromBigInt(value));
  }

  get revenueSharePartner(): Bytes {
    let value = this.get("revenueSharePartner");
    return value!.toBytes();
  }

  set revenueSharePartner(value: Bytes) {
    this.set("revenueSharePartner", Value.fromBytes(value));
  }

  get revenueShare(): i32 {
    let value = this.get("revenueShare");
    return value!.toI32();
  }

  set revenueShare(value: i32) {
    this.set("revenueShare", Value.fromI32(value));
  }

  get referralFee(): i32 {
    let value = this.get("referralFee");
    return value!.toI32();
  }

  set referralFee(value: i32) {
    this.set("referralFee", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFT", id.toString(), this);
    }
  }

  static load(id: string): NFT | null {
    return changetype<NFT | null>(store.get("NFT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get loans(): Array<string> {
    let value = this.get("loans");
    return value!.toStringArray();
  }

  set loans(value: Array<string>) {
    this.set("loans", Value.fromStringArray(value));
  }
}
