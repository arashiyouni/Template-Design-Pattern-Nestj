export interface ISocialMedia<T> {
    Create(value: T): Promise<T>
    Update(value: T): Promise<T>
    Delete(value: string): Promise<T>
    SearchByUsername(value: T): Promise<T>
    SearchBlogPost(value: string | number): Promise<T>
}
