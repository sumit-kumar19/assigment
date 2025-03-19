import { useState, useEffect, useMemo } from "react";
import Input from "../ui/input";
import { Card, CardContent } from "../ui/card";

const debounce = (func, wait) => {
    let timeout;
    const debounced = function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };

    debounced.cancel = () => {
        clearTimeout(timeout);
    };

    return debounced;
};

export default function UserSearch() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    const userMap = useMemo(() => {
        const map = new Map();
        users.forEach((user) => {
            const name = user.name.toLowerCase();
            for (let i = 1; i <= name.length; i++) {
                const prefix = name.substring(0, i);
                if (!map.has(prefix)) {
                    map.set(prefix, []);
                }
                map.get(prefix).push(user);
            }
        });
        return map;
    }, [users]);

    const debouncedSearch = useMemo(() => {
        return debounce((term) => {
            if (!term.trim()) {
                setFilteredUsers([]);
                return;
            }
            const lowerTerm = term.toLowerCase();
            if (userMap.has(lowerTerm)) {
                setFilteredUsers(userMap.get(lowerTerm) || []);
            } else {
                const results = users.filter((user) =>
                    user.name.toLowerCase().includes(lowerTerm)
                );
                setFilteredUsers(results);
            }
        }, 300);
    }, [users, userMap]);

  
    useEffect(() => {
        debouncedSearch(searchTerm);
        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, debouncedSearch]);

    return (
        <section id="users" className="py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold">Our Users</h2>
                    <p className="text-gray-600">
                        Search through our user database to find the right contact.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-lg mx-auto mb-8">
                    <Input
                        type="text"
                        placeholder="Search users by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-4" 
                    />
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-8">
                        <div className="spinner mx-auto"></div>
                        <p className="mt-2 text-gray-500">Loading users...</p>
                    </div>
                )}

                {/* Results */}
                {!isLoading && searchTerm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <Card key={user.id}>
                                    <CardContent>
                                        <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                                        <p className="text-sm text-gray-500 mb-1">
                                            <span className="font-medium text-gray-700">Email:</span> {user.email}
                                        </p>
                                        <p className="text-sm text-gray-500 mb-1">
                                            <span className="font-medium text-gray-700">Phone:</span> {user.phone}
                                        </p>
                                        <p className="text-sm text-gray-500 mb-1">
                                            <span className="font-medium text-gray-700">Website:</span> {user.website}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">Company:</span> {user.company.name}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center py-8 text-gray-500 col-span-full">
                                <p>No users found matching "{searchTerm}"</p>
                            </div>
                        )}
                    </div>
                )}

              
                {!isLoading && !searchTerm && (
                    <div className="text-center py-8 text-gray-500">
                        <p>Enter a name in the search box above to find users</p>
                    </div>
                )}
            </div>
        </section>
    );
}
