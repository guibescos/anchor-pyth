import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorTest } from "../target/types/anchor_test";

describe("anchor-pyth", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorTest as Program<AnchorTest>;

  it("Is initialized!", async () => {
    // Add your test here.
  });
});
