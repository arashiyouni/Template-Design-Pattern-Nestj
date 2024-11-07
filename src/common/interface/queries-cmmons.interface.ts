export interface ISocialMedia<T> {
    Create(value: T): Promise<T>
    Update(value: T): Promise<T>
    UpdateUsername(value: T): Promise<T>
    Delete(value: T): Promise<T>
    SearchByUsername(value: T): Promise<T>
    SearchBlogPost(value: T): Promise<T>
}
