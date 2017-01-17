export function serializeFixtureToJsonApi(fixture, type) {
  let serialized = {
    id: fixture.id,
    type
  };

  delete fixture.id;
  serialized.attributes = fixture;

  return serialized;
}

export function serializeFixturesToJsonApi(fixtures, type) {
  let serialized = fixtures.map((fixture) => {
    return serializeFixtureToJsonApi(fixture, type);
  });

  return { data: serialized };
}
