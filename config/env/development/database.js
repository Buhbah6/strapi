const resolveConnectionString = (env) => {
    const candidates = [env('DATABASE_URL'), env('DATABASE_PUBLIC_URL')];

    for (const candidate of candidates) {
        if (!candidate) {
            continue;
        }

        try {
            new URL(candidate);
            return candidate;
        } catch {
            // Skip malformed URLs and fall back to the next candidate.
        }
    }

    return env('DATABASE_URL', env('DATABASE_PUBLIC_URL'));
};

module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: resolveConnectionString(env)
        }
    }
});
