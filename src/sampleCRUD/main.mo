import Account   "./Account";
import List      "mo:base/List";
import HashMap   "mo:base/HashMap";
import Hash      "mo:base/Hash";
import Nat       "mo:base/Nat";
import Text      "mo:base/Text";
import Debug "mo:base/Debug";

actor {

  //Account list is a hashmap that has Key is Account id, and value is <Account type>
  var accountList : HashMap.HashMap<Nat, Account.Account> = HashMap.HashMap(8, Nat.equal, Hash.hash);

  public func addAccount(id : Nat, name : Text) : async () {
    var account = await Account.Account(id, name);
    accountList.put(id, account);
  };

  public query func getAccount(id : Nat) : async ?Account.Account {
    let account : ?Account.Account = accountList.get(id);
    return account;
  };
  
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
