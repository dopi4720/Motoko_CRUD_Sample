export const idlFactory = ({ IDL }) => {
  const Account = IDL.Service({
    'getId' : IDL.Func([], [IDL.Nat], []),
    'getName' : IDL.Func([], [IDL.Text], []),
    'setId' : IDL.Func([IDL.Nat], [], []),
    'setName' : IDL.Func([IDL.Text], [], []),
  });
  return IDL.Service({
    'addAccount' : IDL.Func([IDL.Nat, IDL.Text], [], []),
    'getAccount' : IDL.Func([IDL.Nat], [IDL.Opt(Account)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
