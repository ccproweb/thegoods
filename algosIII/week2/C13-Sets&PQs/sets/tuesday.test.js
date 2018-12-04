// expeected behaviors and interface

// borrowed from the python Set Class at https://docs.python.org/2/library/sets.html#sets.Set
// - s.add(x)                           : add element x to s
// - s.remove(x)                        : remove element x from s, exception if not present
// - s.discard(x)                       : remove element x from s, doesnt throw 
// - s.size()                           : returns number of elements in s
// - s.contains(e)                      : returns boolean e in s
// - s.union(t)                         : return union set of s and t
// - s.intersection(t)                  : return set intersection of s and t
// - s.difference(t)                    : return set of elements only in s
// - s.symmetric_difference(t)          : return set of elements not in s and t
// - s.pop()                            : remove and return arbitrary value from s, exception if empty
// - s.clear()                          : removes all elements from s
// - s.update(t)                        : adds t to s if not present
// - s.intersection_update(t)           : sets to only include elements in t and s
// - s.difference_update(t)             : sets s without elements found in t
// - s.symmetric_difference_update(t)   : sets to only have elements not in s AND t
// - s.missing(e)                       : returns boolean e NOT in s
// - s.issubset(t)                      : returns boolean all elements s in t
// - s.issuperset(t)                    : returnsbool all elements t in s
// - s.copy(t)                          : return a set containing same elements as s

see the python unit tests at https://github.com/python/cpython/blob/master/Lib/test/test_set.py

const AlanSet = require("./tuesday.js");

test("Can instantiate a set!",()=>{
    let rob = new AlanSet();
    expect(rob instanceof AlanSet).toBe(true);
})