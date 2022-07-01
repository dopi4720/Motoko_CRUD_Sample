
actor class Account(_id : Nat, _name: Text) {
    var id : Nat = _id;
    var name : Text = _name;

    public func getId() : async Nat{
        return id;
    };

    public func setId(value : Nat) : async (){
        id := value;
    };

    public func getName() : async Text{
        return name;
    };

    public func setName(value : Text) : async () {
        name := value;
    };
}